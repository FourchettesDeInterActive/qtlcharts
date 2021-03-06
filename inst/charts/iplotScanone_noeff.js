// Generated by CoffeeScript 1.8.0
var iplotScanone_noeff;

iplotScanone_noeff = function(data, chartOpts) {
  var axispos, chartdivid, chrGap, darkrect, halfh, height, lightrect, linecolor, linewidth, margin, mylodchart, nyticks, pointcolor, pointsize, pointstroke, rotate_ylab, title, titlepos, totalh, totalw, width, xlab, ylab, ylim, yticks, _ref, _ref1, _ref10, _ref11, _ref12, _ref13, _ref14, _ref15, _ref16, _ref17, _ref18, _ref19, _ref2, _ref20, _ref21, _ref22, _ref23, _ref24, _ref25, _ref26, _ref27, _ref28, _ref29, _ref3, _ref30, _ref31, _ref32, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9;
  height = (_ref = chartOpts != null ? chartOpts.height : void 0) != null ? _ref : 450;
  width = (_ref1 = chartOpts != null ? chartOpts.width : void 0) != null ? _ref1 : 900;
  margin = (_ref2 = chartOpts != null ? chartOpts.margin : void 0) != null ? _ref2 : {
    left: 60,
    top: 40,
    right: 40,
    bottom: 40,
    inner: 5
  };
  axispos = (_ref3 = chartOpts != null ? chartOpts.axispos : void 0) != null ? _ref3 : {
    xtitle: 25,
    ytitle: 30,
    xlabel: 5,
    ylabel: 5
  };
  titlepos = (_ref4 = chartOpts != null ? chartOpts.titlepos : void 0) != null ? _ref4 : 20;
  ylim = (_ref5 = (_ref6 = chartOpts != null ? chartOpts.ylim : void 0) != null ? _ref6 : chartOpts != null ? chartOpts.lod_ylim : void 0) != null ? _ref5 : null;
  nyticks = (_ref7 = (_ref8 = chartOpts != null ? chartOpts.nyticks : void 0) != null ? _ref8 : chartOpts != null ? chartOpts.lod_nyticks : void 0) != null ? _ref7 : 5;
  yticks = (_ref9 = (_ref10 = chartOpts != null ? chartOpts.yticks : void 0) != null ? _ref10 : chartOpts != null ? chartOpts.lod_yticks : void 0) != null ? _ref9 : null;
  chrGap = (_ref11 = chartOpts != null ? chartOpts.chrGap : void 0) != null ? _ref11 : 8;
  darkrect = (_ref12 = chartOpts != null ? chartOpts.darkrect : void 0) != null ? _ref12 : "#C8C8C8";
  lightrect = (_ref13 = chartOpts != null ? chartOpts.lightrect : void 0) != null ? _ref13 : "#E6E6E6";
  linecolor = (_ref14 = (_ref15 = chartOpts != null ? chartOpts.linecolor : void 0) != null ? _ref15 : chartOpts != null ? chartOpts.lod_linecolor : void 0) != null ? _ref14 : "darkslateblue";
  linewidth = (_ref16 = (_ref17 = chartOpts != null ? chartOpts.linewidth : void 0) != null ? _ref17 : chartOpts != null ? chartOpts.lod_linewidth : void 0) != null ? _ref16 : 2;
  pointcolor = (_ref18 = (_ref19 = chartOpts != null ? chartOpts.pointcolor : void 0) != null ? _ref19 : chartOpts != null ? chartOpts.lod_pointcolor : void 0) != null ? _ref18 : "#E9CFEC";
  pointsize = (_ref20 = (_ref21 = chartOpts != null ? chartOpts.pointsize : void 0) != null ? _ref21 : chartOpts != null ? chartOpts.lod_pointsize : void 0) != null ? _ref20 : 0;
  pointstroke = (_ref22 = (_ref23 = chartOpts != null ? chartOpts.pointstroke : void 0) != null ? _ref23 : chartOpts != null ? chartOpts.lod_pointstroke : void 0) != null ? _ref22 : "black";
  title = (_ref24 = (_ref25 = chartOpts != null ? chartOpts.title : void 0) != null ? _ref25 : chartOpts != null ? chartOpts.lod_title : void 0) != null ? _ref24 : "";
  xlab = (_ref26 = (_ref27 = chartOpts != null ? chartOpts.xlab : void 0) != null ? _ref27 : chartOpts != null ? chartOpts.lod_xlab : void 0) != null ? _ref26 : "Chromosome";
  ylab = (_ref28 = (_ref29 = chartOpts != null ? chartOpts.ylab : void 0) != null ? _ref29 : chartOpts != null ? chartOpts.lod_ylab : void 0) != null ? _ref28 : "LOD score";
  rotate_ylab = (_ref30 = (_ref31 = chartOpts != null ? chartOpts.rotate_ylab : void 0) != null ? _ref31 : chartOpts != null ? chartOpts.lod_rotate_ylab : void 0) != null ? _ref30 : null;
  chartdivid = (_ref32 = chartOpts != null ? chartOpts.chartdivid : void 0) != null ? _ref32 : 'chart';
  halfh = height + margin.top + margin.bottom;
  totalh = halfh * 2;
  totalw = width + margin.left + margin.right;
  mylodchart = lodchart().lodvarname("lod").height(height).width(width).margin(margin).axispos(axispos).titlepos(titlepos).ylim(ylim).nyticks(nyticks).yticks(yticks).chrGap(chrGap).darkrect(darkrect).lightrect(lightrect).linecolor(linecolor).linewidth(linewidth).pointcolor(pointcolor).pointsize(pointsize).pointstroke(pointstroke).title(title).xlab(xlab).ylab(ylab).rotate_ylab(rotate_ylab);
  d3.select("div#" + chartdivid).datum(data).call(mylodchart);
  return mylodchart.markerSelect().on("click", function(d) {
    var r;
    r = d3.select(this).attr("r");
    return d3.select(this).transition().duration(500).attr("r", r * 3).transition().duration(500).attr("r", r);
  });
};
