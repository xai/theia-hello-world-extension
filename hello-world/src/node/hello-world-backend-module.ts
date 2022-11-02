import { BackendApplicationContribution } from "@theia/core/lib/node/backend-application";
import { ContainerModule } from "@theia/core/shared/inversify";
import { HelloWorldBackendContribution } from "./hello-backend-contribution";

export default new ContainerModule(bind => {
    bind(HelloWorldBackendContribution).toSelf().inSingletonScope();
    bind(BackendApplicationContribution).toService(HelloWorldBackendContribution);
});