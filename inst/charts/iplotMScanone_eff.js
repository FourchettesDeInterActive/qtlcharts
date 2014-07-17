// Generated by CoffeeScript 1.7.1
var iplotMScanone_eff, plotLines;

plotLines = null;

iplotMScanone_eff = function(lod_data, eff_data, times, chartOpts) {
  var axispos, chartdivid, chr, chrGap, colors, curindex, curvechart_xaxis, darkrect, eff_linecolor, eff_linewidth, eff_nlines, eff_ylab, eff_ylim, effchart_curves, effcurve, extra_digits, g_curvechart, g_heatmap, g_lodchart, hbot, htop, lightrect, linecolor, linewidth, lod_labels, lodchart_curves, lodcurve, margin, mycurvechart, mylodchart, mylodheatmap, plotEffCurves, plotLodCurve, pos, posindex, svg, titlepos, totalh, totalw, useQuantScale, wleft, wright, x, zlim, zthresh, _i, _j, _len, _len1, _ref, _ref1, _ref10, _ref11, _ref12, _ref13, _ref14, _ref15, _ref16, _ref17, _ref18, _ref19, _ref2, _ref20, _ref21, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9;
  wleft = (_ref = chartOpts != null ? chartOpts.wleft : void 0) != null ? _ref : 650;
  wright = (_ref1 = chartOpts != null ? chartOpts.wright : void 0) != null ? _ref1 : 350;
  htop = (_ref2 = chartOpts != null ? chartOpts.htop : void 0) != null ? _ref2 : 350;
  hbot = (_ref3 = chartOpts != null ? chartOpts.hbot : void 0) != null ? _ref3 : 350;
  margin = (_ref4 = chartOpts != null ? chartOpts.margin : void 0) != null ? _ref4 : {
    left: 60,
    top: 40,
    right: 40,
    bottom: 40,
    inner: 5
  };
  axispos = (_ref5 = chartOpts != null ? chartOpts.axispos : void 0) != null ? _ref5 : {
    xtitle: 25,
    ytitle: 30,
    xlabel: 5,
    ylabel: 5
  };
  titlepos = (_ref6 = chartOpts != null ? chartOpts.titlepos : void 0) != null ? _ref6 : 20;
  chrGap = (_ref7 = chartOpts != null ? chartOpts.chrGap : void 0) != null ? _ref7 : 8;
  darkrect = (_ref8 = chartOpts != null ? chartOpts.darkrect : void 0) != null ? _ref8 : "#C8C8C8";
  lightrect = (_ref9 = chartOpts != null ? chartOpts.lightrect : void 0) != null ? _ref9 : "#E6E6E6";
  colors = (_ref10 = chartOpts != null ? chartOpts.colors : void 0) != null ? _ref10 : ["slateblue", "white", "crimson"];
  zlim = (_ref11 = chartOpts != null ? chartOpts.zlim : void 0) != null ? _ref11 : null;
  zthresh = (_ref12 = chartOpts != null ? chartOpts.zthresh : void 0) != null ? _ref12 : null;
  eff_ylim = (_ref13 = chartOpts != null ? chartOpts.eff_ylim : void 0) != null ? _ref13 : null;
  eff_ylab = (_ref14 = chartOpts != null ? chartOpts.eff_ylab : void 0) != null ? _ref14 : "";
  linecolor = (_ref15 = chartOpts != null ? chartOpts.linecolor : void 0) != null ? _ref15 : "darkslateblue";
  eff_linecolor = (_ref16 = chartOpts != null ? chartOpts.eff_linecolor : void 0) != null ? _ref16 : null;
  linewidth = (_ref17 = chartOpts != null ? chartOpts.linewidth : void 0) != null ? _ref17 : 2;
  eff_linewidth = (_ref18 = chartOpts != null ? chartOpts.eff_linewidth : void 0) != null ? _ref18 : 2;
  chartdivid = (_ref19 = chartOpts != null ? chartOpts.chartdivid : void 0) != null ? _ref19 : 'chart';
  totalh = htop + hbot + 2 * (margin.top + margin.bottom);
  totalw = wleft + wright + 2 * (margin.left + margin.right);
  useQuantScale = times != null;
  lod_labels = useQuantScale ? (function() {
    var _i, _len, _results;
    _results = [];
    for (_i = 0, _len = times.length; _i < _len; _i++) {
      x = times[_i];
      _results.push(formatAxis(times, extra_digits = 1)(x));
    }
    return _results;
  })() : lod_data.lodnames;
  mylodheatmap = lodheatmap().height(htop).width(wleft).margin(margin).axispos(axispos).titlepos(titlepos).chrGap(chrGap).rectcolor(lightrect).colors(colors).zlim(zlim).zthresh(zthresh);
  svg = d3.select("div#" + chartdivid).append("svg").attr("height", totalh).attr("width", totalw);
  g_heatmap = svg.append("g").attr("id", "heatmap").datum(lod_data).call(mylodheatmap);
  mylodchart = lodchart().height(hbot).width(wleft).margin(margin).axispos(axispos).titlepos(titlepos).chrGap(chrGap).linecolor("none").pad4heatmap(true).darkrect(darkrect).lightrect(lightrect).ylim([0, d3.max(mylodheatmap.zlim())]).pointsAtMarkers(false);
  g_lodchart = svg.append("g").attr("transform", "translate(0," + (htop + margin.top + margin.bottom) + ")").attr("id", "lodchart").datum(lod_data).call(mylodchart);
  lodcurve = function(chr, lodcolumn) {
    return d3.svg.line().x(function(d) {
      return mylodchart.xscale()[chr](d);
    }).y(function(d, i) {
      return mylodchart.yscale()(Math.abs(lod_data.lodByChr[chr][i][lodcolumn]));
    });
  };
  lodchart_curves = null;
  plotLodCurve = function(lodcolumn) {
    var chr, _i, _len, _ref20, _results;
    lodchart_curves = g_lodchart.append("g").attr("id", "lodcurves");
    _ref20 = lod_data.chrnames;
    _results = [];
    for (_i = 0, _len = _ref20.length; _i < _len; _i++) {
      chr = _ref20[_i];
      _results.push(lodchart_curves.append("path").datum(lod_data.posByChr[chr]).attr("d", lodcurve(chr, lodcolumn)).attr("stroke", linecolor).attr("fill", "none").attr("stroke-width", linewidth).style("pointer-events", "none"));
    }
    return _results;
  };
  eff_ylim = eff_ylim != null ? eff_ylim : matrixExtent(eff_data.map(function(d) {
    return matrixExtent(d.data);
  }));
  eff_nlines = d3.max(eff_data.map(function(d) {
    return d.names.length;
  }));
  eff_linecolor = eff_linecolor != null ? eff_linecolor : selectGroupColors(eff_nlines, "dark");
  mycurvechart = curvechart().height(htop).width(wright).margin(margin).axispos(axispos).titlepos(titlepos).xlab("").ylab(eff_ylab).strokecolor("none").rectcolor(lightrect).xlim([-0.5, lod_data.lodnames.length - 0.5]).ylim(eff_ylim).nxticks(0).commonX(true);
  g_curvechart = svg.append("g").attr("transform", "translate(" + (wleft + margin.top + margin.bottom) + ",0)").attr("id", "curvechart").datum(eff_data[0]).call(mycurvechart);
  effcurve = function(posindex, column) {
    return d3.svg.line().x(function(d) {
      return mycurvechart.xscale()(d);
    }).y(function(d, i) {
      return mycurvechart.yscale()(eff_data[posindex].data[column][i]);
    });
  };
  effchart_curves = null;
  plotEffCurves = function(posindex) {
    var curveindex, _results;
    effchart_curves = g_curvechart.append("g").attr("id", "curves");
    _results = [];
    for (curveindex in eff_data[posindex].names) {
      effchart_curves.append("path").datum(eff_data[posindex].x).attr("d", effcurve(posindex, curveindex)).attr("fill", "none").attr("stroke", eff_linecolor[curveindex]).attr("stroke-width", eff_linewidth);
      _results.push(effchart_curves.selectAll("empty").data(eff_data[posindex].names).enter().append("text").text(function(d) {
        return d;
      }).attr("x", function(d, i) {
        return margin.left + wright + axispos.ylabel;
      }).attr("y", function(d, i) {
        var z;
        z = eff_data[posindex].data[i];
        return mycurvechart.yscale()(z[z.length - 1]);
      }).style("dominant-baseline", "middle").style("text-anchor", "start"));
    }
    return _results;
  };
  curvechart_xaxis = g_curvechart.append("g").attr("class", "x axis").selectAll("empty").data(lod_labels).enter().append("text").attr("class", "y axis").attr("id", function(d, i) {
    return "xaxis" + i;
  }).attr("x", function(d, i) {
    return mycurvechart.xscale()(i);
  }).attr("y", margin.top + htop + axispos.xlabel).text(function(d) {
    return d;
  }).attr("opacity", 0);
  posindex = {};
  curindex = 0;
  _ref20 = lod_data.chrnames;
  for (_i = 0, _len = _ref20.length; _i < _len; _i++) {
    chr = _ref20[_i];
    posindex[chr] = {};
    _ref21 = lod_data.posByChr[chr];
    for (_j = 0, _len1 = _ref21.length; _j < _len1; _j++) {
      pos = _ref21[_j];
      posindex[chr][pos] = curindex;
      curindex += 1;
    }
  }
  mycurvechart.curvesSelect().on("mouseover.panel", null).on("mouseout.panel", null);
  return mylodheatmap.cellSelect().on("mouseover", function(d) {
    var p;
    plotLodCurve(d.lodindex);
    g_lodchart.select("g.title text").text("" + lod_labels[d.lodindex]);
    plotEffCurves(posindex[d.chr][d.pos]);
    p = d3.format(".1f")(d.pos);
    g_curvechart.select("g.title text").text("" + d.chr + "@" + p);
    return g_curvechart.select("text#xaxis" + d.lodindex).attr("opacity", 1);
  }).on("mouseout", function(d) {
    lodchart_curves.remove();
    g_lodchart.select("g.title text").text("");
    effchart_curves.remove();
    g_curvechart.select("g.title text").text("");
    return g_curvechart.select("text#xaxis" + d.lodindex).attr("opacity", 0);
  });
};
