'use strict';

const DATE_FORMAT = "YYYY-MM-DD HH:mm:ss SSS";

document.getElementById('to-epoch-milli').addEventListener('click', () => {
  const epochTime = document.getElementById('epoch-time').value;
  const epochMilli = moment(epochTime, DATE_FORMAT);
  const $el = document.getElementById('epoch-milli');
  $el.parentElement.MaterialTextfield.change(epochMilli.format("x"));
  $el.focus();
  $el.select();
});

document.getElementById('to-epoch-time').addEventListener('click', () => {
  const epochMilli = document.getElementById('epoch-milli').value;
  const epochTime = moment(Number(epochMilli));
  const $el = document.getElementById('epoch-time');
  $el.parentElement.MaterialTextfield.change(epochTime.format(DATE_FORMAT));
  $el.focus();
  $el.select();
});

document.getElementById('to-degree-lonlat').addEventListener('click', () => {
  const millisecLon = Number(document.getElementById('millisec-lon').value);
  const millisecLat = Number(document.getElementById('millisec-lat').value);
  const $el = document.getElementById('degree-lon');
  $el.parentElement.MaterialTextfield.change(milliToDegree(millisecLon));
  $el.focus();
  $el.select();
  document.getElementById('degree-lat').parentElement.MaterialTextfield.change(milliToDegree(millisecLat));
});

let milliToDegree = value => {
  return value / 3600000;
};

document.getElementById('to-millisec-lonlat').addEventListener('click', () => {
  const degreeLon = Number(document.getElementById('degree-lon').value);
  const degreeLat = Number(document.getElementById('degree-lat').value);
  const $el = document.getElementById('millisec-lon');
  $el.parentElement.MaterialTextfield.change(degreeToMilli(degreeLon));
  $el.focus();
  $el.select();
  document.getElementById('millisec-lat').parentElement.MaterialTextfield.change(milliToDegree(degreeLat));
});

let degreeToMilli = value => {
  return Math.round(value * 3600000);
};
