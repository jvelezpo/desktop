import {
  ON_MAIN_PROCESS_STATE,
  SYNC_MAIN_STATE,
  GET_INSTALLED_EDITORS
} from "../constants/rendererActionTypes";
import makeActionCreator, {
  makeActionWithMeta
} from "../utils/makeActionCreator";

export const setMainProcessState = makeActionCreator(
  ON_MAIN_PROCESS_STATE,
  "payload"
);

export const getInstalledEditors = makeActionWithMeta({
  forwardToMain: true
})(GET_INSTALLED_EDITORS);

export const onRenderStoreCreated = makeActionWithMeta({
  forwardToMain: true
})(SYNC_MAIN_STATE);
