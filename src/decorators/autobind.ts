namespace App {
  // Autobind decorator
  export function autobind(
    _target: any,
    _methodName: string,
    description: PropertyDescriptor,
  ) {
    const originalMethod = description.value;
    const adjDescriptor: PropertyDescriptor = {
      configurable: true,
      get() {
        const boundFn = originalMethod.bind(this);
        return boundFn;
      },
    };
    return adjDescriptor;
  }
}
