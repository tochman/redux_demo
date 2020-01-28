const toDegreesMinutesAndSeconds = (coordinate) => {
  let absolute = Math.abs(coordinate);
  let degrees = Math.floor(absolute);

  let minutesNotTruncated = (absolute - degrees) * 60;
  let minutes = Math.floor(minutesNotTruncated);
  let seconds = Math.floor((minutesNotTruncated - minutes) * 60);

  return degrees + "°" + minutes + "'" + seconds + "''";
}

const convertToDMS = (values) => {
  let latitude = toDegreesMinutesAndSeconds(values.lat) ;
  let latitudeCardinal = values.lat >= 0 ? "N" : "S";

  let longitude = toDegreesMinutesAndSeconds(values.lng);
  let longitudeCardinal = values.lng >= 0 ? "E" : "W";

  return latitude + " " + latitudeCardinal + " " + longitude + " " + longitudeCardinal;
}

export default convertToDMS