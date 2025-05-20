/**
 * Guard to prevent Core module from being imported multiple times.
 * This helps maintain singleton services in the application.
 */
export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
    throw new Error(
      `${moduleName} has already been loaded. Import Core modules in the AppModule only.`
    );
  }
}
