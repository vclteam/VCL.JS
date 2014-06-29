import V = require("VCL/VCL");
import VXU = require("VCL/VXUtils");
import VX2 = require("VCL/VXChartBar");

export class TChartBarH extends VX2.TChartBar {
    public createBar() {
        var b: VX2.Bar = super.createBar();
        return new Bar(b.options, b.owner)
    }
}

export class TDBChartBarH extends VX2.TDBChartBar {
    public createBar() {
        var b: VX2.Bar = super.createBar();
        return new Bar(b.options, b.owner)
    }
}

export class Bar extends VX2.Bar {
    _calc1(horizontal: boolean) {
        var bottomOffsets, gridLine, h, i, w, yLabelWidths;
        if (horizontal) {
            w = this.el.height();
            h = this.el.width();
        }
        else {
            w = this.el.width();
            h = this.el.height();
        }
        if (this.elementWidth !== w || this.elementHeight !== h || this.dirty) {
            this.elementWidth = w;
            this.elementHeight = h;
            this.dirty = false;
            this.left = this.options.paddingY;
            this.right = this.elementWidth - 15;//this.options.paddingY;
            this.top = 15;//this.options.paddingX;
            this.bottom = this.elementHeight - this.options.paddingX;
            if (this.options.axes) {
                if (horizontal) {
                    yLabelWidths = (function () {
                        var _i, _len, _ref, _results;
                        _ref = this.grid;
                        _results = [];
                        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                            gridLine = _ref[_i];
                            _results.push(this.measureText(this.yLabelFormat(gridLine, true), 0).width);
                        }
                        return _results;
                    }).call(this);
                }
                else {
                    yLabelWidths = (function () {
                        var _i, _len, _ref, _results;
                        _ref = this.grid;
                        _results = [];
                        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                            gridLine = _ref[_i];
                            _results.push(this.measureText(this.yLabelFormat(gridLine, true), 0).width);
                        }
                        return _results;
                    }).call(this);
                }
                this.left += Math.max.apply(Math, yLabelWidths);
                var cacheHeight = -1;
                bottomOffsets = (function () {
                    var _i, _ref, _results;
                    _results = [];
                    for (i = _i = 0, _ref = this.data.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
                        /*if (this.options.xLabelAngle == 0) {
                            if (cacheHeight == -1) {
                                cacheHeight = this.measureText(this.data[i].label, -this.options.xLabelAngle).height;
                            }
                            _results.push(cacheHeight); //same height 
                        } else {
                            _results.push(this.measureText(this.data[i].label, -this.options.xLabelAngle).height);
                        }*/
                        _results.push(this.measureText(this.data[i].text, -this.options.xLabelAngle).height);
                    }
                    return _results;
                }).call(this);
                this.bottom -= Math.max.apply(Math, bottomOffsets);
            }
            this.width = Math.max(1, this.right - this.left);
            this.height = Math.max(1, this.bottom - this.top);

            this.dx = this.width / (this.xmax - this.xmin);

            this.dy = this.height / (this.ymax - this.ymin);
            if (horizontal) {
                if (this.calc) {
                    return this.calc();
                }
            }
        }
    }

    redraw() {
        //###draw horizontal bars###

        //workaround 1 - currently we cannot deal with olddata animation so I disabled it.
        this.olddata = [];

        this.raphael.clear();
        this._calc1(true);
        this.left += 12;
        this.drawSeries();
        this.drawXAxisV();
        this.drawSeriesV();

        //workaround 2 - return to the regular clac for drawGridV - should be fixed
        var tmp = this.left;
        this._calc1(false);
        this.left = tmp;
        //this.drawGoals();
        //this.drawEvents();
        this.drawGridV();
        return 0;

    }

    drawGridV() {
        var lineY, lineX, y, x, _i, _len, _ref, _results, row, label;

        //check if draw grid
        if (this.options.grid === false && this.options.axes === false) {
            return;
        }
        //draw titleY
        if (this.options.titleY) {
            var b = this.measureText(this.options.titleY, 270);
            var center = (this.elementHeight / 2);
            this.raphael.text(this.options.titleTextSize / 2 /*this.left - this.options.paddingY*/, center, this.options.titleY).
                attr('font-size', this.options.titleTextSize).attr('font-family', this.options.gridTextFamily).
                attr('font-weight', "normal").attr('fill', this.options.titleTextColor).rotate(270);
        }
        //draw titleX
        if (this.options.titleX) {
            var b = this.measureText(this.options.titleX);
            var center = (this.elementWidth / 2);
            this.raphael.text(center, this.bottom + this.options.paddingX - this.options.titleTextSize / 2, this.options.titleX).
                attr('font-size', this.options.titleTextSize).attr('font-family', this.options.gridTextFamily).
                attr('font-weight', "normal").attr('fill', this.options.titleTextColor);
        }
        //draw line X and Y
        if (this.options.grid) {
            _ref = this.grid;
            lineY = _ref[0];
            var y1 = this.transY(lineY);
            lineY = _ref[_ref.length - 1];
            var y2 = this.transY(lineY);
            this.drawGridLine("M" + this.left + "," + y1 + "L" + this.left + "," + y2);
            this.drawGridLine("M" + this.left + "," + (y1 - 5) + "H" + (this.left + this.width));
        }

        var gridX = [];
        if (this.xmin >= 0) {
            var step = (this.xmax - this.xmin) / (this.options.numLines - 1);
            gridX = (function () {
                var _i, _ref, _ref1, _results;
                _results = [];
                for (y = _i = _ref = this.xmin, _ref1 = this.xmax; _ref <= _ref1 ? _i <= _ref1 : _i >= _ref1; y = _i += step) {
                    _results.push(Math.floor(y));
                }
                return _results;
            }).call(this);
        }

        for (_i = 0, _len = this.options.numLines; _i < _len; _i++) {
            var idxY = this.grid[_i];
            var y1 = this.transY(idxY);
            var lblY = idxY;
            var idxX = gridX[_i];
            var x2 = this.transX(idxX);
            //var lblX = this.data[idxX].label;

            //horizontal
            if (true) {
                if (this.options.axes) {
                    this.drawYAxisLabel(x2, this.bottom + 7, this.yLabelFormat(lblY, true));
                }
                //if (this.options.axes) {
                //    this.drawYAxisLabel((this.left -5), y1, this.xAxisFormat(lblX, true));
                //}
                if (this.options.grid) {
                    this.drawGridLine("M" + x2 + "," + this.top + "V" + (this.top + this.height));
                }
            }
            //else
            //{
            //    if (this.options.axes) {
            //        this.drawYAxisLabel(x2, this.bottom +7, this.xAxisFormat(lblX, true));
            //    }
            //    if (this.options.axes) {
            //        this.drawYAxisLabel(this.left -5, y1, this.yAxisFormat(lblY, true));
            //    }
            //    if (this.options.grid) {
            //        this.drawGridLine("M" + this.left + "," + y1 + "H" + (this.left + this.width));
            //    } 
            //}


        }
        return 0;
    }

    drawSeriesV() {
        var groupHeight, barWidth, topPadding;
        groupHeight = this.width / this.options.data.length;
        //    barWidth = (groupHeight * this.options.barSizeRatio - this.options.barGap * (this.options.numBars - 1)) / this.options.numBars;
        topPadding = groupHeight * (1 - this.options.barSizeRatio) / 2;
        //    this.options.barWidth = Math.min(this.options.maximumbarwidth, barWidth);
        var idx = 0;
        var x = -1
        this.data.reverse();
        this.barNodes.reverse().forEach((item) => {
            item.forEach((node) => {
                if (x == -1)
                    x = this.left + topPadding;
                var height = node.attr('height') + 1; //For EX - not show if the height/width < 1px
                var base = this.options.barWidth;

                var top = this.top + idx * groupHeight + topPadding;
                //if (!this.options.stacked) {
                //    left += sidx * (barWidth + this.options.barGap);
                //}

                node.attr('width', height);
                node.attr('height', base);
                node.attr('x', x);
                node.attr('y', top);

                var row = this.data[idx];
                row._x = x;
                row._y[0] = top;
                idx++;
            });
        });
        this.data.reverse();
        this.barNodes.reverse();
    }

    drawXAxisV() {
        //this.data.reverse();
        var arrLbl = this.drawXAxis();
        var groupHeight, barWidth, topPadding;
        groupHeight = this.width / this.options.data.length;
        //    barWidth = (groupHeight * this.options.barSizeRatio - this.options.barGap * (this.options.numBars - 1)) / this.options.numBars;
        topPadding = groupHeight * (1 - this.options.barSizeRatio) / 2;
        //    this.options.barWidth = Math.min(this.options.maximumbarwidth, barWidth);

        var l = 0;
        //calc max width
        arrLbl.forEach((node) => {
            if (node) {
                var w = node.getBBox().width;
                l = Math.max(l, w);
            }
        });
        this.left = l + 20;

        var idx = 0;
        var x = -1
        arrLbl.forEach((node) => {
            if (node) {
                if (x == -1)
                    x = this.left + topPadding - 5;
                var top = this.top + idx * groupHeight + topPadding;
                node.attr('x', x);
                node.attr('y', top);
                var w = node.getBBox().width;
                l = Math.max(l, w);
            }
            idx++;
        });
    }

    drawXAxis() {
        var label, labelBox, margin, offset, prevAngleMargin, prevLabelMargin, row, textBox, ypos, _i, _ref, _results;
        prevLabelMargin = null;
        prevAngleMargin = null;
        var _arrLbl = [];
        _results = [];
        //draw x title
        ypos = this.bottom + 3;

        for (var i = _i = 0, _ref = this.data.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
            row = this.data[this.data.length - 1 - i];
            label = this.drawYAxisLabel(row._x, ypos, this.yLabelFormat(row.label, true));
            textBox = label.getBBox();
            label.transform("r" + (-this.options.xLabelAngle));
            labelBox = label.getBBox();
            label.transform("t0," + (labelBox.height / 2) + "...");
            if (this.options.xLabelAngle !== 0) {
                offset = -0.5 * textBox.width * Math.cos(this.options.xLabelAngle * Math.PI / 180.0);
                label.transform("t" + offset + ",0...");
            }
            if ((!(prevLabelMargin != null) || prevLabelMargin >= labelBox.x + labelBox.width || (prevAngleMargin != null) && prevAngleMargin >= labelBox.x) && labelBox.x >= 0 && (labelBox.x + labelBox.width) < this.el.width()) {
                if (this.options.xLabelAngle !== 0) {
                    margin = 1.25 * this.options.gridTextSize / Math.sin(this.options.xLabelAngle * Math.PI / 180.0);
                    prevAngleMargin = labelBox.x - margin;
                }
                _results.push(prevLabelMargin = labelBox.x - this.options.xLabelMargin);
                _arrLbl.push(label);
            } else {
                _results.push(label.remove());
                _arrLbl.push(null);
            }
        }

        return _arrLbl;
    }

    onHoverMove(x, y, evt) {
        var indexX, inxY, _ref;
        indexX = evt.target.idx;

        if (indexX == null || indexX < 0)
            return;

        if (!this.hover || this.barNodes.length == 0 || this.barNodes.length <= indexX || this.barNodes[indexX] == null)
            return;

        //var bar = this.barNodes[indexX][0];
        //var width: number = bar.attr('width');
        //if (indexX < this.barNodes.length / 2)
        //    this.hover.offset = width;
        //else
        //    this.hover.offset = -width;
        var series = evt.target.series;

        return (_ref = this.hover).update.apply(_ref, this.hoverContentForRow(indexX, series));
    }

    onHoverOut() {
        if (!this.hover) return;
        if (this.options.hideHover !== false) {
            return this.hover.hide();
        }
    }

    hoverContentForRow(index, series) {
        var content, j, row, x, y, _i, _len, _ref;
        row = this.data[index];
        if (row == null) {
            return null;
        }

        row.index = index;
        row.series = series;

        //user have data to put on
        if (typeof this.options.hoverCallback === 'function') {
            content = this.options.hoverCallback(index, this.options, content);
        }
        //generate hover div
        else {
            var lblX: string = "";
            if (!this.options.toolTipFormat) {
                lblX = this.options.titleX + ":\n  " + row.label;
            }
            content = "<div style='pointer-events: none;' class='morris-hover-row-label'>\n  " + lblX + "\n</div>";
            _ref = row.y;
            for (j = _i = 0, _len = _ref.length; _i < _len; j = ++_i) {
                if (series == j) {
                    y = _ref[j];
                    if (y != null) {
                        var lblY: string = "";
                        if (this.options.toolTipFormat) {
                            lblY = this.options.toolTipFormat(row);
                        }
                        else {
                            lblY = this.options.labels[j];
                            if (lblY == null)
                                lblY = this.options.titleY;
                            //lbl = lbl.substring(0, 14);
                            lblY = lblY + ":\n  " + (this.yLabelFormat(y, false));
                        }
                        content += "<div style='pointer-events: none;color: " + (this.colorFor(row, j, 'label')) + "'>\n  " + lblY + "\n</div>";
                    }
                }
            }
        }

        //draw location
        return [content, row._x + row._size[series], row._y[series]];
    }

}

