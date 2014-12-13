"use strict";

function TimelineEntry(startingDate, endingDate, location, title, miscInfo) {
  this.startingDate = startingDate;
  this.endingDate = endingDate;
  this.location = location;
  this.title = title;
  this.miscInfo = miscInfo;
}

module.exports = TimelineEntry;
