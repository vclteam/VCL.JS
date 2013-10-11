
(function ($) {

    $.fn.bulletChart = function (options) {
        var styles = {
            container: 'bullet-chart-container',
            total: 'bullet-chart-total',
            summary: 'bullet-chart-summary-current',
            current: 'bullet-chart-current',
            baseline: 'bullet-chart-baseline',
            unallocated: 'bullet-chart-unallocated',
            underallocated: 'bullet-chart-underallocated',
            overallocated: 'bullet-chart-overallocated',
            overallocatedTotal: 'bullet-chart-overallocted-total'
        };

        if (!String.prototype.format) {
            String.prototype.format = function () {
                var args = arguments;
                return this.replace(/{(\d+)}/g, function (match, number) {
                    return typeof args[number] != 'undefined'
                        ? args[number]
                        : match;
                });
            };
        }

        options = $.extend({
            subtitleFormat: 'of {0}h',
            animate: false,
        }, options);

        var self = this;

        if (!self.hasClass(styles.container)) {
            self.addClass(styles.container);
        }

        function validateOptions() {
            if (options.current == null) {
                var dataCurrent = self.data('current');
                if (dataCurrent == undefined || dataCurrent == '') {
                    throw 'Options must contains an element \'current\'.';
                } else {
                    options.current = dataCurrent;
                }
            }
            if (!options.total) {
                var dataTotal = self.data('total');
                if (dataTotal == undefined || dataTotal == '') {
                    throw 'Options must contains an element \'total\'.';
                } else {
                    options.total = dataTotal;
                }
            }
            if (!options.baseline || options.baseline == '') {
                var dataBaseline = self.data('baseline');
                if (dataBaseline == undefined || dataBaseline == '') {
                    options.baseline = undefined;
                } else {
                    options.baseline = dataBaseline;
                }
            }
        }

        function resolveOptions() {
            if (options.current.constructor === String) {
                options.current = options.current.replace(',', '.');
                options.current = parseFloat(options.current);
            }
            if (options.total.constructor === String) {
                options.total = options.total.replace(",", ".");
                options.total = parseFloat(options.total);
            }
            if (options.baseline && options.baseline.constructor === String) {
                options.baseline = options.baseline.replace(',', '.');
                options.baseline = parseFloat(options.baseline);
            }
        }

        function createHtml() {

            var totalWidth = self.width();

            if (options.title) {
                var title = $('<h5>').text(options.title).css('margin-top', '1px').css('margin-bottom', '1px');
                if (options.titlecolor) title.css('color', options.titlecolor);
                self.append(title);
            }

            // create the summary, containers and subtitle
            var summary = $('<div>').addClass(styles.summary).text(options.current).css('font-size', options.tititlefontsize);
            if (options.showsubtitle == true) {
                self.append(summary);
            }

            var remainigWidth = totalWidth - summary.width();
            var chartWidth = (Math.floor((remainigWidth / totalWidth) * 100) - 3) + '%';

            var chartContainer = $('<div>').css({ display: 'inline-block', width: chartWidth });
            self.append(chartContainer);

            var animationContainer = $('<div>').addClass(styles.container);
            chartContainer.append(animationContainer);

            createBulletCharts(animationContainer);

            if (options.showsubtitle == true) {
                var subtitle = !options.baseline ? options.subtitleFormat.format(options.total) : options.subtitleFormat.format(options.total, options.baseline);
                var subtitleElement = $('<div>').text(subtitle);
                chartContainer.append(subtitleElement);
            }
        }

        function createBulletCharts(container) {
            if (!options.baseline) {
                createDoubleBulletChart(container);
            } else {
                createTripleBulletChart(container);
            }
        }

        function createDoubleBulletChart(container) {

            var width = (options.current / options.total) * 100;
            var totalValue = $('<div>');
            var currentValue = $('<div>');

            if (options.current <= options.total) {
                totalValue
                    .addClass(styles.total)
                    .addClass(styles.unallocated)
                    .css('width', '100%');

                currentValue
                    .addClass(styles.current)
                    .addClass(styles.underallocated)
                    .css('width', width + '%');

                totalValue.append(currentValue);
                container.append(totalValue);

                if (options.animate) {
                    animateSlideToLeft(container);
                }
            } else {
                width = 100 - (width - 100);

                currentValue
                    .addClass(styles.current)
                    .addClass(styles.overallocated)
                    .css('width', '100%');

                totalValue
                    .addClass(styles.total)
                    .addClass(styles.overallocated)
                    .css('width', width + '%');

                currentValue.append(totalValue);
                container.append(currentValue);

                if (options.animate) {
                    animateSlideToLeft(container);
                }
            }
        }

        function createTripleBulletChart(container) {
            var secondElement = $('<div>');
            var thirdElement = $('<div>');

            var topElementStyle = determineTopElementStyle();
            var topElement = $('<div>').addClass(topElementStyle).css('width', '100%');

            if (topElementStyle == styles.baseline) {
                if (options.current <= options.total) {
                    // baseline > total > current
                    var secondElementWidth = (options.total / options.baseline) * 100;
                    var thirdElementWidth = (options.current / options.total) * 100;

                    secondElement = configureElement(secondElement, styles.total, styles.unallocated, secondElementWidth);
                    thirdElement = configureElement(thirdElement, styles.current, styles.underallocated, thirdElementWidth);

                } else {
                    // baseline > current > total
                    var secondElementWidth = (options.current / options.baseline) * 100;
                    var thirdElementWidth = (options.total / options.current) * 100;

                    secondElement = configureElement(secondElement, styles.current, styles.overallocated, secondElementWidth);
                    thirdElement = configureElement(thirdElement, styles.total, styles.overallocated, thirdElementWidth);
                }
            } else if (topElementStyle == styles.total) {
                if (options.current <= options.total && options.current <= options.baseline) {
                    // total > baseline > current
                    topElement.removeClass(styles.total).addClass(styles.overallocatedTotal);
                    var secondElementWidth = (options.baseline / options.total) * 100;
                    var thirdElementWidth = (options.current / options.baseline) * 100;

                    secondElement = configureElement(secondElement, styles.baseline, styles.unallocated, secondElementWidth);
                    thirdElement = configureElement(thirdElement, styles.current, styles.underallocated, thirdElementWidth);

                } else {
                    // total > current > baseline
                    topElement.removeClass(styles.total).addClass(styles.overallocatedTotal);
                    var secondElementWidth = (options.current / options.total) * 100;
                    var thirdElementWidth = (options.baseline / options.current) * 100;

                    secondElement = configureElement(secondElement, styles.current, styles.underallocated, secondElementWidth);
                    thirdElement = configureElement(thirdElement, styles.baseline, styles.unallocated, thirdElementWidth);
                }
            } else {
                topElement.addClass(styles.overallocated);
                if (options.current >= options.baseline && options.baseline >= options.total) {
                    // current > baseline > total
                    var secondElementWidth = (options.baseline / options.current) * 100;
                    var thirdElementWidth = (options.total / options.baseline) * 100;

                    secondElement = configureElement(secondElement, styles.baseline, styles.overallocated, secondElementWidth);
                    thirdElement = configureElement(thirdElement, styles.total, styles.overallocated, thirdElementWidth);
                } else {
                    // current > total > baseline
                    var secondElementWidth = (options.total / options.current) * 100;
                    var thirdElementWidth = (options.baseline / options.total) * 100;

                    secondElement = configureElement(secondElement, styles.total, styles.overallocated, secondElementWidth);
                    thirdElement = configureElement(thirdElement, styles.baseline, styles.overallocated, thirdElementWidth);
                }
            }

            secondElement.append(thirdElement);
            topElement.append(secondElement);

            if (options.animate) {
                animateSlideToLeft(container);
            }

            container.append(topElement);
        }

        function determineTopElementStyle() {
            // permutations:
            // current > total > baseline
            // current > baseline > total
            // total > current > baseline
            // total > baseline > current
            // baseline > current > total
            // baseline > total > current

            if (options.baseline >= options.total && options.baseline >= options.current) {
                return styles.baseline;
            } else if (options.total >= options.baseline && options.total >= options.current) {
                return styles.total;
            } else {
                return styles.current;
            }
        }

        function configureElement(element, style, subStyle, width) {
            return element.addClass(style).addClass(subStyle).width(width + '%');
        }

        function animateSlideToLeft(element) {

            var distance = element.css('width');

            element.css('width', '0px').animate({
                width: distance,
                duration: 200
            });
        }

        validateOptions();
        resolveOptions();
        createHtml();
        return self;
    };
}(jQuery));