function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var Icon = function Icon(_ref) {
  var _ref$hide = _ref.hide,
      hide = _ref$hide === void 0 ? false : _ref$hide,
      _ref$append = _ref.append,
      append = _ref$append === void 0 ? false : _ref$append,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? 'check' : _ref$name,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? '' : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '' : _ref$color,
      _ref$family = _ref.family,
      family = _ref$family === void 0 ? 'fa' : _ref$family,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      others = _objectWithoutPropertiesLoose(_ref, ["hide", "append", "name", "size", "color", "family", "className"]);

  if (hide) {
    return null;
  }

  var _size = size ? family + "-" + size : '';

  var _color = color ? "text-" + color : '';

  var _append = append ? 'input-group-text' : '';

  var _icon = React.createElement("i", Object.assign({
    className: _append + " " + family + " " + family + "-" + name + " " + _size + " " + _color + " " + className
  }, others));

  return append ? React.createElement("span", {
    className: "input-group-prepend"
  }, _icon) : _icon;
};

var FormItem = function FormItem(_ref) {
  var _ref$hide = _ref.hide,
      hide = _ref$hide === void 0 ? false : _ref$hide,
      label = _ref.label,
      title = _ref.title,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'sm' : _ref$size,
      _ref$col = _ref.col,
      col = _ref$col === void 0 ? 2 : _ref$col,
      helpFeedback = _ref.helpFeedback,
      invalidFeedback = _ref.invalidFeedback,
      validFeedback = _ref.validFeedback,
      children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      style = _ref.style;

  if (hide) {
    return null;
  }

  var colLabel = label ? col : 0;
  var colInput = colLabel == 12 ? 12 : 12 - colLabel;
  helpFeedback = helpFeedback ? React.createElement("div", {
    className: "help"
  }, helpFeedback) : null;
  invalidFeedback = invalidFeedback ? React.createElement("div", {
    className: "invalid-feedback"
  }, invalidFeedback) : null;
  validFeedback = validFeedback ? React.createElement("div", {
    className: "valid-feedback"
  }, validFeedback) : null;
  children = itemContentTransform(children, {});
  return React.createElement("div", {
    className: "row " + className,
    title: title,
    style: style
  }, React.createElement("label", {
    className: " col-" + colLabel + " col-form-label col-form-label-" + size
  }, label, helpFeedback), React.createElement("span", {
    className: "input-group input-group-" + size + " col-" + colInput + " form-check"
  }, children, invalidFeedback, validFeedback));
};

var itemContentTransform = function itemContentTransform(childrenRoot, itemProps) {
  var size = itemProps.size;
  return React.Children.map(childrenRoot, function (child, ix) {
    var _child = child,
        type = _child.type,
        _child$props = _child.props,
        props = _child$props === void 0 ? {} : _child$props;
    var _props$className = props.className,
        className = _props$className === void 0 ? '' : _props$className;

    switch (type) {
      case 'button':
        child = React.cloneElement(child, _extends({}, props, {
          className: "btn btn-" + size + " btn-outline-secondary " + className
        }));
        return React.createElement("div", {
          className: "input-group-prepend"
        }, child);

      case 'span':
        child = React.cloneElement(child, _extends({}, props, {
          className: "input-group-text " + className
        }));
        return React.createElement("div", {
          className: "input-group-prepend"
        }, child);

      case 'input':
      case 'textarea':
        return React.cloneElement(child, _extends({}, props, {
          className: "form-control form-control-" + size + "  " + className
        }));

      case 'select':
        return React.cloneElement(child, _extends({}, props, {
          className: "custom-select form-control form-control-" + size + "  " + className
        }));

      case Icon:
        return React.cloneElement(child, _extends({}, props, {
          append: true
        }));
    }

    return child;
  });
};

var styles = {"feedback":"_lTs_f","feedback-sm":"_2T9Mh","feedback-md":"_2_ymV","feedback-lg":"_1d9kc"};

var ICON = {
  'info': 'info-circle',
  'error': 'times-circle',
  'warning': 'exclamation-circle',
  'success': 'check-circle',
  '': 'circle'
};
var COLOR = {
  'info': 'info',
  'error': 'danger',
  'warning': 'warning',
  'success': 'success',
  '': 'default'
};
var Feedback = function Feedback(_ref) {
  var _ref$hide = _ref.hide,
      hide = _ref$hide === void 0 ? false : _ref$hide,
      value = _ref.value,
      icon = _ref.icon,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? '' : _ref$type,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'sm' : _ref$size,
      color = _ref.color,
      _ref$message = _ref.message,
      message = _ref$message === void 0 ? '' : _ref$message,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      children = _ref.children,
      others = _objectWithoutPropertiesLoose(_ref, ["hide", "value", "icon", "type", "size", "color", "message", "className", "children"]);

  if (hide) {
    return null;
  }

  if (value) {
    type = value.type;
    message = value.message;
  }

  if (!message) {
    return null;
  }

  icon = icon ? icon : ICON[type];
  color = color ? color : COLOR[type];
  console.log('styles', styles);
  return React.createElement("div", Object.assign({
    className: styles.feedback + " feedback-" + type + " feedback-" + size + " text-" + color + " " + className
  }, others), React.createElement(Icon, {
    name: icon,
    family: "fa",
    className: "mr-1",
    size: "1x"
  }), React.createElement("span", null, message), children);
};

var Grid = function Grid(_ref) {
  var _ref$hide = _ref.hide,
      hide = _ref$hide === void 0 ? false : _ref$hide,
      _ref$cols = _ref.cols,
      cols = _ref$cols === void 0 ? [] : _ref$cols,
      _ref$colsSm = _ref.colsSm,
      colsSm = _ref$colsSm === void 0 ? [] : _ref$colsSm,
      _ref$colsMd = _ref.colsMd,
      colsMd = _ref$colsMd === void 0 ? [] : _ref$colsMd,
      _ref$colsLg = _ref.colsLg,
      colsLg = _ref$colsLg === void 0 ? [] : _ref$colsLg,
      _ref$colsXl = _ref.colsXl,
      colsXl = _ref$colsXl === void 0 ? [] : _ref$colsXl,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? '' : _ref$size,
      _ref$gutters = _ref.gutters,
      gutters = _ref$gutters === void 0 ? false : _ref$gutters,
      _ref$justify = _ref.justify,
      justify = _ref$justify === void 0 ? '' : _ref$justify,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? [] : _ref$children,
      other = _objectWithoutPropertiesLoose(_ref, ["hide", "cols", "colsSm", "colsMd", "colsLg", "colsXl", "size", "gutters", "justify", "className", "children"]);

  if (hide === true) {
    return null;
  }

  var _children = gridContentTransform(children, {
    cols: cols,
    colsSm: colsSm,
    colsMd: colsMd,
    colsLg: colsLg,
    colsXl: colsXl,
    size: size
  });

  var _justify = justify ? 'justify-content-' + justify : '';

  var _gutters = gutters ? 'no-gutters' : '';

  return React.createElement("div", Object.assign({
    className: "row " + _justify + " " + _gutters + " " + className
  }, other), _children);
};

var gridContentTransform = function gridContentTransform(childrenRoot, gridProps) {
  var cols = gridProps.cols,
      colsSm = gridProps.colsSm,
      colsMd = gridProps.colsMd,
      colsLg = gridProps.colsLg,
      colsXl = gridProps.colsXl,
      size = gridProps.size;
  return React.Children.map(childrenRoot, function (child, ix) {
    var _child = child,
        type = _child.type,
        _child$props = _child.props,
        props = _child$props === void 0 ? {} : _child$props;
    var _props$className = props.className,
        className = _props$className === void 0 ? '' : _props$className;
    var classNameCol = decodeCols('col-', ix, cols) + " " + decodeCols('col-sm-', ix, colsSm) + " " + decodeCols('col-md-', ix, colsMd) + " " + decodeCols('col-lg-', ix, colsLg) + " " + decodeCols('col-xl-', ix, colsXl);

    switch (type) {
      case 'label':
        child = React.cloneElement(child, _extends({}, props, {
          className: "col-form-label col-form-label-" + size + " " + className
        }));
        break;

      case 'input':
      case 'select':
      case 'textarea':
        child = React.cloneElement(child, _extends({}, props, {
          className: "form-control form-control-" + size + "  " + className
        }));
        break;

      case FormItem:
        child = React.cloneElement(child, _extends({}, props, {
          size: size
        }));
        break;

      case 'div':
        return React.cloneElement(child, _extends({}, props, {
          className: classNameCol + " " + className
        }));
    }

    return React.createElement("div", {
      className: classNameCol
    }, child);
  });
};

var decodeCols = function decodeCols(type, index, cols) {
  return cols && cols.length ? type + cols[index % cols.length] : '';
};

var mainContentTransform = function mainContentTransform(childrenRoot, panelProps) {
  var mode = panelProps.mode;
  return React.Children.map(childrenRoot, function (child) {
    var type = child.type,
        _child$props = child.props,
        props = _child$props === void 0 ? {} : _child$props;
    var _props$className = props.className,
        className = _props$className === void 0 ? '' : _props$className;

    switch (type) {
      case 'title':
        return React.cloneElement(_extends({}, child, {
          type: 'h5'
        }), _extends({}, props, {
          className: mode + "-title " + className
        }));

      case 'h5':
        return React.cloneElement(child, _extends({}, props, {
          className: mode + "-title " + className
        }));

      case 'h6':
        return React.cloneElement(child, _extends({}, props, {
          className: mode + "-subtitle " + className
        }));

      case 'p':
        return React.cloneElement(child, _extends({}, props, {
          className: mode + "-text " + className
        }));

      case 'a':
        return React.cloneElement(child, _extends({}, props, {
          className: mode + "-link " + className
        }));
    }

    return child;
  });
};

var panelContentTransform = function panelContentTransform(childrenRoot, panelProps) {
  var mode = panelProps.mode,
      color = panelProps.color,
      title = panelProps.title;
  return React.Children.map(childrenRoot, function (child) {
    var type = child.type,
        _child$props2 = child.props,
        props = _child$props2 === void 0 ? {} : _child$props2;
    var _props$className2 = props.className,
        className = _props$className2 === void 0 ? '' : _props$className2;

    var _children, _title;

    switch (type) {
      case 'header':
        return React.cloneElement(_extends({}, child, {
          type: 'div'
        }), _extends({}, props, {
          className: mode + "-header font-weight-bold bg-" + color + " " + className
        }));

      case 'footer':
        return React.cloneElement(_extends({}, child, {
          type: 'div'
        }), _extends({}, props, {
          className: mode + "-footer " + className
        }));

      case 'main':
        _children = mainContentTransform(child.props.children, panelProps);
        _title = title ? React.createElement("h4", {
          className: mode + "-title"
        }, title) : null;
        return React.cloneElement(_extends({}, child, {
          type: 'div'
        }), _extends({}, props, {
          className: mode + "-body " + className
        }), _title, _children);

      case Grid:
        _title = title ? React.createElement("h4", {
          className: mode + "-title"
        }, title) : null;
        return React.createElement("div", {
          className: mode + "-body"
        }, _title, child);
    }

    return child;
  });
};

var Panel = function Panel(props) {
  var _props$hide = props.hide,
      hide = _props$hide === void 0 ? false : _props$hide,
      _props$title = props.title,
      title = _props$title === void 0 ? '' : _props$title,
      _props$mode = props.mode,
      mode = _props$mode === void 0 ? 'card' : _props$mode,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      _props$className3 = props.className,
      className = _props$className3 === void 0 ? '' : _props$className3,
      _props$children = props.children,
      children = _props$children === void 0 ? [] : _props$children,
      others = _objectWithoutPropertiesLoose(props, ["hide", "title", "align", "mode", "color", "className", "children"]);

  if (hide === true) {
    return null;
  }

  var _children = panelContentTransform(children, {
    mode: mode,
    color: color,
    title: title
  });

  return React.createElement("div", Object.assign({
    className: mode + " border-" + color + " " + className
  }, others), _children);
};

exports.Feedback = Feedback;
exports.FormItem = FormItem;
exports.Grid = Grid;
exports.Icon = Icon;
exports.Panel = Panel;
//# sourceMappingURL=index.js.map
