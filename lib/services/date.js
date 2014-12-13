"use strict";

function isInvalidDate(obj) {
  return obj.toString() === "Invalid Date";
}

exports.tryDate = function(str) {
  var result = new Date(str);
  if(isInvalidDate(result)) {
    throw new Error("'" + str + "' does not constitute a valid date.");
  }

  return result;
};
