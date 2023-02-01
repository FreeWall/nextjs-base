import { Component } from 'react';

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

const mergeClasses = (...args) => Object.assign({}, ...args);

const classify = (defaultClasses) => (WrappedComponent) =>
  class extends Component {
    static displayName = `Classify(${getDisplayName(WrappedComponent)})`;

    render() {
      const { className, classes, ...restProps } = this.props;
      const classNameAsObject = className ? { root: className } : null;
      const finalClasses = mergeClasses(
        defaultClasses,
        classNameAsObject,
        classes,
      );

      return (
        <WrappedComponent
          {...restProps}
          classes={finalClasses}
        />
      );
    }
  };

export { mergeClasses, mergeClasses as useStyle };

export default classify;