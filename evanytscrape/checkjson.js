/* jshint ignore:start */
import evanit0 from 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDChDA087meIRzhAvG30G46D9zthtgr8-I&channelId=UCUHasjbkqSEdE5AmaGKMNQw&part=snippet,id&order=date&maxResults=1' assert {type: 'json'};
import justevanit0 from 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDChDA087meIRzhAvG30G46D9zthtgr8-I&channelId=UC-cRY9cvwdOwZtnoHTJlCvw&part=snippet,id&order=date&maxResults=1' assert {type: 'json'};
/* jshint ignore:end */

// Source: http://stackoverflow.com/questions/497790
var dates = {
  convert:function(d) {
      return (
          d.constructor === Date ? d :
          d.constructor === Array ? new Date(d[0],d[1],d[2]) :
          d.constructor === Number ? new Date(d) :
          d.constructor === String ? new Date(d) :
          typeof d === "object" ? new Date(d.year,d.month,d.date) :
          NaN
      );
  },
  compare:function(a,b) {
      return (
          isFinite(a=this.convert(a).valueOf()) &&
          isFinite(b=this.convert(b).valueOf()) ?
          (a>b)-(a<b) :
          NaN
      );
  },
  inRange:function(d,start,end) {
     return (
          isFinite(d=this.convert(d).valueOf()) &&
          isFinite(start=this.convert(start).valueOf()) &&
          isFinite(end=this.convert(end).valueOf()) ?
          start <= d && d <= end :
          NaN
      );
  }
};

let main = evanit0.items[0];
let just = justevanit0.items[0];

switch (dates.compare(main.snippet.publishedAt,just.snippet.publishedAt)) {
  case 1: $('#target').append(main.id.videoId); break;
  case -1: $('#target').append(just.id.videoId); break;
  default: $('#target').append(main.id.videoId); break;
}