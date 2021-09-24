# Created by Troy Ascher for use in CS 544
getwd()

# To create a tibble and manipulate the df that way.
library(tidyverse)

# Load this library for easily calculating the AQI. 
library(con2aqi)

# Open air allows windroses to be plotted.
library(openair)

# Color pallette "WesAnderson"
library(wesanderson)
wes.colors <- names(wes_palettes)

# For using subplots
library(plotly)

# For strata sampling
library (sampling)



def.par <- par()
scipen <- 10
# Grabs the names of the CSV files.

# Get the directory that the file that was opened is in. 
# dirname(rstudioapi::getSourceEditorContext()$path)

list.files(dirname(rstudioapi::getSourceEditorContext()$path))


local.files <-
  list.files(
    "C:/Users/LeeTroyJenkins/OneDrive/School/BU/Foundation of Analytics/Project/Datasets/Dataverse/"
  )

local.dir <-
  "C:/Users/LeeTroyJenkins/OneDrive/School/BU/Foundation of Analytics/Project/Datasets/Dataverse/"


# Create variables names
var.names <- paste("wd",local.files, sep = "_")


# Function for loading the files
grab.and.format <-
  function(location, vec) {
    for (i in vec) {
      x <-
        read.csv(
          paste(
            location,
            i,
            sep = ""
          ),
          header = TRUE
        )
      return(x)
    }
  }


# Create the files
for (i in seq(1, length(var.names))){
  assign(var.names[i], grab.and.format(local.dir, local.files[i]))
}


# Remove unnecessary objects.
remove(var.names)


# Identify which stations are in each dataset by removing the suffix, merging
# the characters into two columns in a dataframe, and then checking which values
# are in each column.


# Format Dataframe station names so that they can be compared between lists and
# used as a key value when combined with date.
wd_beijing_17_18_aq.csv$stationId <- substring(wd_beijing_17_18_aq.csv$stationId, 1, nchar(wd_beijing_17_18_aq.csv$stationId) - 3)
wd_beijing_17_18_meo.csv$station_id <- substring(wd_beijing_17_18_meo.csv$station_id, 1, nchar(wd_beijing_17_18_meo.csv$station_id) - 4)


# Get the unique station names from each list.
aq.names <- unique(wd_beijing_17_18_aq.csv$stationId)

meo.names <- unique(wd_beijing_17_18_meo.csv$station_id)


# Merge unique names into a dataframe of two columns.
temp.names <- merge(aq.names, meo.names)


# Identify which stations are in each dataset. Can use this as a key.
temp.names <- subset(temp.names, temp.names$x == temp.names$y)


# Create new datasets of air and weather that only contain the stations that are
# in each dataset.
raw.air <-
  subset(wd_beijing_17_18_aq.csv,
         wd_beijing_17_18_aq.csv$stationId %in% temp.names$x)
unique(raw.air$stationId)

raw.meo <-
  subset(wd_beijing_17_18_meo.csv,
         wd_beijing_17_18_meo.csv$station_id %in% temp.names$x)
unique(raw.meo$station_id)


# Remove the original dataframes and unnecessary objects.
remove(wd_beijing_17_18_aq.csv, wd_beijing_17_18_meo.csv, aq.names, meo.names, temp.names, i)


# Check that the unique values match.
unique(raw.air$stationId) %in% unique(raw.meo$station_id)
unique(raw.meo$station_id) %in% unique(raw.air$stationId)


# Create a key value based on date and station name in each dataset.
raw.air$PKID <- paste(raw.air$stationId, raw.air$utc_time, sep = "_")
raw.meo$PKID <-paste(raw.meo$station_id, raw.meo$utc_time, sep = "_")


# Merge dataframes based on PKID.
raw.data <- merge(raw.air, raw.meo, by="PKID")


# Remove unneeded dataframes, save the combined raw data.
remove(raw.air, raw.meo)


# Create a working dataframe with only columns needed and no NA values.
cn.atmos <- subset(raw.data, select = -c(utc_time.y, station_id))

# Remove extreme values
cn.atmos$PM2.5[cn.atmos$wind_speed > 30] <- NA


# Remove NA values
sum(is.na(cn.atmos$PM2.5)) # 3219

cn.atmos <- na.omit(cn.atmos)

sum(is.na(cn.atmos$PM2.5)) # 0

# ------ The following section deals with formatting values in order to 
# ------ calculate the US EPA's AQI value based on measured pollutants.

# Units need to be converted to AQI for easier reading.
# Alter PM10 Values greater than 604 (EPA guidelines do not go that high) to the
# max value.

cn.atmos$PM10 <- replace(cn.atmos$PM10, cn.atmos$PM10 > 604, 604)  



# convert units from ug to MG Conversion formula from:
# https://cfpub.epa.gov/ncer_abstracts/index.cfm/fuseaction/display.files/fileid/14285
# https://www.teesing.com/en/page/library/tools/ppm-mg3-converter

cn.atmos$NO2 <- (24.45 * cn.atmos$NO2 / 46.01)
cn.atmos$CO <- 24.45 * cn.atmos$CO / 28.01
cn.atmos$O3 <- (24.45 * cn.atmos$O3 / 48.00) / 1000
cn.atmos$SO2 <-(24.45 * cn.atmos$SO2 / 64.06)


# Use con3aqi libary to convert values to US AQI standard.
cn.atmos$PM2.5 <- con2aqi(pollutant="pm25",con=cn.atmos$PM2.5) # Works
cn.atmos$PM10 <- con2aqi(pollutant="pm10",con=cn.atmos$PM10) # works

cn.atmos$O3 <- con2aqi(pollutant="o3",con=cn.atmos$O3, type = "1h")

cn.atmos$NO2 <- con2aqi(pollutant="no2",con=cn.atmos$NO2) # Works
cn.atmos$CO <- con2aqi(pollutant="co",con=cn.atmos$CO) # works
cn.atmos$SO2 <- con2aqi(pollutant="so2",con=cn.atmos$SO2) # Works


# Calculate AQI

count <- 1
for (i in seq(0, length(cn.atmos$PKID) - 1)) {
  cn.atmos$AQI[count] <-   max(c(
    cn.atmos$PM2.5[count],
    cn.atmos$PM10[count],
    cn.atmos$NO2[count],
    cn.atmos$CO[count],
    cn.atmos$O3[count],
    cn.atmos$SO2[count]
  ))
  count <- count + 1
}


# Create a chart of Latitude and Longitude for map use
cn.geo <-
  unique(subset(cn.atmos,
                select =
                  c("stationId", "longitude", "latitude")))


cn.atmos <- subset(cn.atmos, select= -c(longitude, latitude))


# reformat the date column for use with the windrose
names(cn.atmos)[3] <- "date"
cn.atmos$date <- as.POSIXct(cn.atmos$date, tz = "UTC")


# Convert temp to Farenheit
# (0°C × 9/5) + 32 = 32°F
cn.atmos$temperature <- round((cn.atmos$temperature * 9/5) + 32)


# Convert wind speed to mph
cn.atmos$wind_speed <- round(cn.atmos$wind_speed * 2.23694)


# Create date field for calculating values by day.
cn.atmos$day_date <- substring(cn.atmos$date, 1, 10)




# Create AQI Colors and levels according to EPA guidelines.
aqi.col <- c("Green", "Yellow", "Orange", "Red", "Purple", "Maroon")

aqi.range.high <- c(50,
                    100,
                    150,
                    200,
                    300,
                    500)

aqi.range.low <- c(0, 51, 101, 151, 201, 301)

aqi.html <- c("#00e400",
              "#ffff00",
              "#ff7e00",
              "#ff0000",
              "#8f3f97",
              "#7e0023")

col.r <- c(0, 255, 255, 255, 143, 126)
col_g <- c(228, 255, 126, 0, 63, 0)
col.b <- c(0, 0, 0, 0, 151, 35)
aqi.message <- c(
  "Good",
  "Moderate",
  "Unhealthy for Some",
  "Unhealthy",
  "Very Unhealthy",
  "Hazardous"
)


aqi.guide <- data.frame(
  Color = aqi.col,
  Low = aqi.range.low,
  High = aqi.range.high,
  HTML = aqi.html,
  Message = aqi.message
)


# Remove unnecessary objects.
remove(
  aqi.col,
  aqi.message,
  aqi.range.high,
  aqi.range.low,
  col.b,
  col.r,
  col_g,
  aqi.html
)

aqi.level <- function(n){
  if (n <= 51){
    return("Good")
  } else if (n <= 101){
    return("Moderate")
  } else if (n <= 151){
    return("Unhealthy for Some")
  } else if(n <= 201){
    return("Unhealthy")
  } else if(n <= 301){
    return("Very Unhealthy")
  } else if (n > 300){
    return("Hazardous")
  }
}

# Create a new column to calculate the AQI level messaging in. 
cn.atmos$aqi_level <- cn.atmos$AQI

for (i in seq(1, length(cn.atmos$AQI))) {
  cn.atmos$aqi_level[i] <- aqi.level(cn.atmos$AQI[i])
}




# Turn DF into a tibble object to make analysis easier. 
cn.atmos.backup <- cn.atmos

cn.atmos <- as_tibble(cn.atmos)


# Add decatenated date columns.
cn.atmos$year <- str_sub(cn.atmos$day_date, start = 1, end = 4)
cn.atmos$month <- str_sub(cn.atmos$day_date, start = 6, end = 7)
cn.atmos$day <- str_sub(cn.atmos$day_date, start = 9, end = 10)

# Remove data for 2018.
cn.atmos <- subset(cn.atmos, cn.atmos$year == 2017)


# Create a seasons column and calculate the season based on the month column.
cn.atmos$season <- as.integer(str_sub(cn.atmos$day_date, start = 6, end = 7))


# Create vector of seasons to look up. 
seasons <-
  c(
    "Winter",
    "Winter",
    "Spring",
    "Spring",
    "Spring",
    "Summer",
    "Summer",
    "Summer",
    "Fall",
    "Fall",
    "Fall",
    "Winter"
  )


# Calculate seasons based on month.
cn.atmos$season <- seasons[cn.atmos$season]



# Change "Sunny/clear" to "Sunny" for clarity and ease with plotting.
cn.atmos$weather[cn.atmos$weather == "Sunny/clear"] <- "Clear"

#Change AQI to double to use in calculations.
cn.atmos$AQI <- as.double(cn.atmos$AQI)
cn.atmos



# Table of weather conditions.
cn.atmos$weather %>% table()

# Barplot of Weather condition. 

weather.tb <- cn.atmos$weather %>% table()
weather.bp <- weather.tb %>% barplot(
  las = 1 ,
  col = wes_palette(wes.colors[11], 7, type = "continuous"),
  ylim = c(0, 50000),
  main = "Recorded Sky Conditions in Beijing",
  sub = "Across nine weather stations"
)
text(x = weather.bp, y = weather.tb, label = weather.tb, pos = 3)


# Show proportions
cn.atmos$weather %>% table() %>% prop.table()*100

# Calculate the frequency of each weather condition across all observations.
weather.df <- data.frame(table(cn.atmos$weather))
weather.df$percent <- weather.df$Freq / sum(weather.df$Freq) * 100


# Barchart where occurence is greater than 1%.

par(mar = c(5.1,5.1,2.1,2.1))

weather.df2 <- subset(weather.df, weather.df$percent > 1)

par(mfrow = c(1,2))
weather.bp2 <- barplot(
  height = subset(weather.df$Freq, weather.df$percent > 1),
  names.arg = subset(weather.df$Var1, weather.df$percent > 1),
  horiz = TRUE,
  las = 1,
  xlim = c(0,40000),
  main = "Count of sky conditions, hourly observation.",
  sub = "where % is > 1",
  xlab = "Frequency of Conditions",
  col = wes_palette(wes.colors[2], 3, type = "discrete")
)
legend(x = "topright",
       title = "Count",
       legend = rev(weather.df2$Freq), 
       fill = rev(wes_palette(wes.colors[2], 3, type = "discrete"))
)
par(def.par)

par(mar = c(2,1,1,1))

subset(weather.df$Freq, weather.df$percent > 1) %>%
  pie(
    labels = paste(round(
      subset(weather.df$percent, weather.df$percent > 1)
    ), "%", sep = ""),
    col = wes_palette(wes.colors[2], 3, type = "discrete"),
    main = "% of sky conditions, all stations"
  )
legend(
  x = 'bottomleft',
  legend = subset(weather.df$Var1, weather.df$percent > 1),
  fill =  wes_palette(wes.colors[2], 3, type = "discrete")
)

# by season <<<<<<<<<<<<<<<<<<<<<<<<<<<<<< with all 5 variables maybe.

par(oma = c(3,0,3,2))
par(mar = c(3,5,2,0))
par(mfrow = c(2, 2))


for (i in unique(cn.atmos$season)){
  barplot(
    height = table(subset(cn.atmos$weather, cn.atmos$season == i)),
    xlim = c(0, 14000),
    horiz = TRUE,
    beside = TRUE,
    # main = i,
    las = 2,
    col = wes_palette(wes.colors[2], 5, type = "discrete")
  )
  legend(x = "topright",
         title = paste("Count", i),
         legend = table(subset(cn.atmos$weather, cn.atmos$season == i)), 
         fill = wes_palette(wes.colors[2], 5, type = "discrete"),
         cex = .7
  )
}
mtext("Sky Conditions",outer = TRUE, side = 1, line = 1)
mtext("Sky Conditions by %, by season", side = 3, line = 1, cex = 1.5, outer = TRUE)
par(def.par)


# AQI Analysis

table(cn.atmos$aqi_level)



par(mar = c(5.1,5.1,2.1,2.1))
hist(
  cn.atmos$AQI,
  main = "Distribution of AQI, all observations",
  xlim = c(0, 500),
  ylim = c(0, 30000),
  breaks = 10,
  las = 2, 
  axes = FALSE,
  xlab = "AQI",
  labels = TRUE,
  ylab = "Frequency",
  col = c(
    "#ffff00",
    "#ff7e00",
    "#ff0000",
    "#8f3f97",
    "#8f3f97",
    "#7e0023",
    "#7e0023",
    "#7e0023",
    "#7e0023"
  )
)
axis(1, at = c(seq(0, 500, 50)))
axis(2,
     at = c(seq(0, 30000, 5000)),
     las = 2,
     labels = c(0, paste(c(5, 10, 15, 20, 25, 30), "k", sep = "")))
legend(x = "topright",
       aqi.guide$Message,
       fill = aqi.guide$HTML,
       cex = .6)
par(def.par)






# --------------- END  Histogram showing distribution of AQI Counts --------------
# ------------------------ AQI 5 Num and Boxplot -------------------------------

summary(cn.atmos$AQI)


boxplot(cn.atmos$AQI,
        subset(cn.atmos$AQI, cn.atmos$season == "Summer"),
        subset(cn.atmos$AQI, cn.atmos$season == "Fall"),
        subset(cn.atmos$AQI, cn.atmos$season == "Winter"),
        subset(cn.atmos$AQI, cn.atmos$season == "Spring"),
        horizontal = TRUE,
        names = c("2017", "Summer", "Fall", "Winter", "Spring"),
        las = 1,
        main = "Boxplots of AQI, by season.",
        col = wes_palette(wes.colors[7], 5, type = "continuous"))


boxplot(
  subset(cn.atmos$AQI, cn.atmos$month == "01"),
  subset(cn.atmos$AQI, cn.atmos$month == "02"),
  subset(cn.atmos$AQI, cn.atmos$month == "03"),
  subset(cn.atmos$AQI, cn.atmos$month == "04"),
  subset(cn.atmos$AQI, cn.atmos$month == "05"),
  subset(cn.atmos$AQI, cn.atmos$month == "06"),
  subset(cn.atmos$AQI, cn.atmos$month == "07"),
  subset(cn.atmos$AQI, cn.atmos$month == "08"),
  subset(cn.atmos$AQI, cn.atmos$month == "09"),
  subset(cn.atmos$AQI, cn.atmos$month == "10"),
  subset(cn.atmos$AQI, cn.atmos$month == "11"),
  subset(cn.atmos$AQI, cn.atmos$month == "12"),
  horizontal = TRUE,
  names = c(
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ),
  col = wes_palette(wes.colors[7], 12, type = "continuous"),
  las = 1,
  main = "Boxplots of AQI, by season."
)


# ---------------------------- END 5 NUM and Boxplot ---------------------------

# Comparing distribution of AQI to the other pollutants by year and then season

boxplot(
  cn.atmos$PM2.5,
  cn.atmos$PM10,
  cn.atmos$NO2,
  cn.atmos$CO,
  cn.atmos$O3,
  cn.atmos$SO2,
  cn.atmos$AQI,
  horizontal = TRUE,
  col = wes_palette(wes.colors[4], 7, type = "continuous"),
  names = c("PM2.5", "PM10", "NO2", "CO", "O3", "SO2", "AQI"),
  las = 1,
  main = "Boxplots of Air Pollutants",
  xlab = "Pollutant Concentration"
)


par(oma=c(3,3,3,3))
par(mfrow = c(2,2))
par(mar = c(2,4,2,1))
for (i in unique(cn.atmos$season)){
  boxplot(
    subset(cn.atmos$AQI, cn.atmos$season == i),
    subset(cn.atmos$PM2.5, cn.atmos$season == i),
    subset(cn.atmos$PM10, cn.atmos$season == i),
    subset(cn.atmos$NO2, cn.atmos$season == i),
    subset(cn.atmos$CO, cn.atmos$season == i),
    subset(cn.atmos$O3, cn.atmos$season == i),
    subset(cn.atmos$SO2, cn.atmos$season == i),
    horizontal = TRUE,
    col = wes_palette(wes.colors[8], 7, type = "continuous"),
    names = c("AQI", "PM2.5", "PM10", "NO2", "CO", "O3", "SO2"),
    las = 1,
    main = i
  )
}
mtext("Pollutant Concentration",outer = TRUE, side = 1, line = 1)
mtext("Levels of pollutants, by season", side = 3, line = 1, cex = 1.5, outer = TRUE)

par(def.par)

# Plot of PM and AQI
par(mfrow = c(2,1), oma=c(3,3,3,3), mar = c(3,4,1,1))
plot(
  cn.atmos$AQI,
  cn.atmos$PM10,
  pch = 20,
  col = wes_palette(wes.colors[7], 1, type = "continuous"),
  xlab = "AQI",
  ylab = "PM10",
  las = 1
)
abline(lm(cn.atmos$AQI ~ cn.atmos$PM10), col = "red")
plot(cn.atmos$AQI, 
     cn.atmos$PM2.5, 
     pch = 20,
     col = wes_palette(wes.colors[7], 1, type = "continuous"),
     xlab = "",
     ylab = "PM2.5",
     las = 1
)
abline(lm(cn.atmos$AQI ~ cn.atmos$PM2.5), col = "red")
mtext("AQI",outer = TRUE, side = 1, line = 1)
mtext("Plot of AQI and PM levels", side = 3, line = 1, cex = 1.5, outer = TRUE)
par(def.par)

# Sampling

aqi.mean <- mean(cn.atmos$AQI)
aqi.mean

aqi.sd <- sd(cn.atmos$AQI)
aqi.sd


set.seed(4099)


#Function for sampling
sample.and.mean <- function (x, sample.size, reps) {
  temp.sample <- seq(1:reps)
  xbar <- numeric(reps)
  set.seed(4099)
  for (i in temp.sample) {
    xbar[i] <- mean(sample(x, size = sample.size, replace = FALSE))
  }
  return(xbar)
}
par(mfrow = c(2,2), oma = c(2,2,3,0), mar = c(2,3,1,0))

four.samples <- c(10, 20, 50, 500)
for (i in four.samples) {
  xbar <- sample.and.mean(cn.atmos$AQI, i, 1000)
  assign(paste("aqi.mean", i, sep = "_"), mean(xbar))
  assign(paste("aqi.sd", i, sep = "_"), sd(xbar))
  hist(
    xbar,
    main = paste("Sample size,", i),
    col = wes_palette(wes.colors[7], 4, type = "continuous"),
    probability = TRUE,
    las = 1, 
    xlab = paste("Mean =",round(mean(xbar), 3), sep = " "),
    xlim = c(70, 170),
    ylim = c(0, .2),
    ylab = ""
  )
}
mtext("Simple Random Sampling with Various Sizes", side = 3, line = 1, cex = 1.5, outer = TRUE)
mtext("Density", side = 2, line = 1, cex = 1, outer = TRUE)
mtext("AQI", side = 1, line = 1, cex = 1, outer = TRUE)
par(def.par)

# SRSWOR
# SRSWOR
sample.size <- 500

set.seed(4099)

aqi.srswor <- srswor(sample.size, nrow(cn.atmos))

aqi.srswor <- cn.atmos[aqi.srswor != 0,]

par(mar = c(5,5,2,2))
hist(
  aqi.srswor$AQI,
  las = 1,
  col = wes_palette(wes.colors[4], 4, type = "continuous"),
  main = "SRSWOR",
  probability = TRUE,
  xlab = paste("Sample size", sample.size, sep = " "),
  xlim = c(0, 500),
  ylim = c(0, .015)
)
par(def.par)


# Systematic Sampling
N <- nrow(cn.atmos)
n <- 1000
k <- (ceiling(N/n))

set.seed(4099)
r <- sample(k, 1)

my.index <- seq(r, by = k, length = n)

aqi.syst.samp <- cn.atmos[my.index,]

# Histogram of Systematic Sampling
par(mar = c(5,5,2,2))
hist(aqi.syst.samp$AQI,
     las = 1,
     col = wes_palette(wes.colors[4], 4, type = "continuous"),
     main = "Systematic Sampling",
     probability = TRUE,
     xlab = "n = 1000",
     xlim = c(0, 500))

# Stratified Sampling

cn.atmos.ord <- as.data.frame(cn.atmos[order(cn.atmos$aqi_level),])


# Compare the population and the three sample types

par(mfrow = c(2,2), oma = c(3,3,3,1), mar = c(2,3,1,1))
simple <- hist(
  aqi.srswor$AQI,
  las = 1,
  col = wes_palette(wes.colors[4], 4, type = "continuous"),
  main = "SRSWOR",
  probability = TRUE,
  xlab = paste("Sample size", sample.size, sep = " "),
  xlim = c(0, 500),
  ylim = c(0, .02)
)
syst <- hist(aqi.syst.samp$AQI,
             las = 1,
             col = wes_palette(wes.colors[4], 4, type = "continuous"),
             main = "Systematic Sampling",
             probability = TRUE,
             xlab = "",
             ylab = "",
             xlim = c(0, 500),
             ylim = c(0, .02),
             breaks = 20
)
strat <- hist(aqi.strata.sample$AQI,
              probability = TRUE,
              las = 1,
              col = wes_palette(wes.colors[4], 4, type = "continuous"),
              xlab = "",
              ylab = "",
              main = "Stratified",
              xlim = c(0, 500),
              ylim = c(0, .02),
              breaks = 15
)
hist(cn.atmos$AQI,
     probability = TRUE,
     main = "Population",
     ylab = "",
     xlab = "",
     col = wes_palette(wes.colors[4], 4, type = "continuous"),
     las = 1,
     xlim = c(0, 500),
     ylim = c(0, .02)
)

mtext("Distributions of Various Sampling Methods", side = 3, line = 1, cex = 1.5, outer = TRUE)
mtext("Density", side = 2, line = 1, cex = 1, outer = TRUE)
mtext("AQI", side = 1, line = 1, cex = 1, outer = TRUE)
par(def.par)

# Remove "Hazardous" because the strata size for hazardous is equal to 0, and
# causes R to throw an error 
cn.atmos.ord <- subset(cn.atmos.ord, cn.atmos.ord$aqi_level != "Hazardous")
cn.atmos.ord.freq <- table(cn.atmos.ord$aqi_level)

sample.size <- 50

stratum.size <- sample.size * cn.atmos.ord.freq / sum(cn.atmos.ord.freq)
# stratum.size <- as.vector(subset(stratum.size, stratum.size != 0))

stratum.size <- as.vector(round(stratum.size))

set.seed(4099)
aqi.strata <- strata(cn.atmos.ord,
                     stratanames = c("aqi_level"),
                     size = stratum.size,
                     method = "srswor",
                     description = TRUE)

aqi.strata.sample <- getdata(cn.atmos, aqi.strata)


hist(aqi.strata.sample$AQI,
     probability = TRUE,
     las = 1,
     col = wes_palette(wes.colors[4], 4, type = "continuous"),
     xlab = paste("Sample size", sample.size, sep = " "),
     main = "Stratified",
)

# -------------------Windrose ---------------------------------


par(def.par)

for (i in unique(cn.atmos$season)){
  windr <- cn.atmos %>% filter(season == i) %>%
    windRose(
      ws = "wind_speed",
      wd = "wind_direction",
      paddle = FALSE,
      key.position = "right",
      type = "season",
      main = i
    )
  assign(paste("wind", i, sep = "."), windr)
}

print(wind.Fall, split = c(1, 1, 2, 2))
print(wind.Spring, split = c(2, 1, 2, 2), newpage = FALSE)
print(wind.Summer, split = c(1, 2, 2, 2), newpage = FALSE)
print(wind.Winter, split = c(2, 2, 2, 2), newpage = FALSE)

par(def.par)
for (i in unique(cn.atmos$season)) {
  polr <- cn.atmos %>% filter(season == i) %>% pollutionRose(
    ws = "wind_speed",
    wd = "wind_direction",
    paddle = FALSE,
    pollutant = "AQI",
    cols = as.vector(aqi.guide$HTML),
    breaks = as.vector(aqi.guide$Low),
    normalise = FALSE,
    annotate = TRUE,
    main = i
  )
  assign(paste("pol", i, sep = "."), polr)
}

print(pol.Fall, split = c(1, 1, 2, 2))
print(pol.Spring, split = c(2, 1, 2, 2), newpage = FALSE)
print(pol.Summer, split = c(1, 2, 2, 2), newpage = FALSE)
print(pol.Winter, split = c(2, 2, 2, 2), newpage = FALSE)


cn.atmos %>% filter(stationId == "daxing") %>%
  pollutionRose(
    ws = "wind_speed",
    wd = "wind_direction",
    paddle = FALSE,
    pollutant = "AQI",
    cols = as.vector(aqi.guide$HTML),
    breaks = as.vector(aqi.guide$Low),
    normalise = FALSE,
    annotate = TRUE,
    main = i
  )



