// we use Object type because methods on the native side use NSDictionary and ReadableMap
// and we want to stay compatible with those
import {TurboModuleRegistry, TurboModule} from 'react-native';
import {Int32} from 'react-native/Libraries/Types/CodegenTypes';
import {UnsafeObject} from './fabricUtils';
import {LinkSuccess, LinkExit, LinkError, SubmissionData} from '../Types';

export interface Spec extends TurboModule {
    create(token: string, noLoadingState: boolean): void;
    open(
        fullScreen: boolean,
        onSuccess: (result: UnsafeObject<LinkSuccess>) => void,
        onExit: (error: UnsafeObject<LinkError>, result: UnsafeObject<LinkExit>) => void,
      ): void;
    dismiss(): void;
    submit(data: SubmissionData): void;
    // those two are here for event emitter methods
    addListener(eventName: string): void;
    removeListeners(count: Int32): void;
}

export default TurboModuleRegistry.get<Spec>('RNLinksdk');
