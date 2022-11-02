import { MaybePromise } from '@theia/core';
import { BackendApplicationContribution } from '@theia/core/lib/node/backend-application';
import { injectable } from "@theia/core/shared/inversify";

@injectable()
export class HelloWorldBackendContribution implements BackendApplicationContribution {
    initialize(): MaybePromise<void> {
        console.log('Hello backend!');
    }
}