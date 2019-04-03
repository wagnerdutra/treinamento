import { runSaga } from "redux-saga";
import api from "../../services/api";
import MockAdapter from "axios-mock-adapter";

import { Creators as RepositoriesAction } from "../../store/ducks/repositories";

import { getRepositories } from "../../store/sagas/repositories";

const apiMock = new MockAdapter(api);

describe("Repositories Saga", () => {
  it("should be able to fetch repositories", async () => {
    apiMock.onGet("users/diego3g/repos").reply(200, ["Repo1", "Repo 2"]);

    const dispatched = [];

    await runSaga(
      {
        dispatch: action => {
          dispatched.push(action);
        }
      },
      getRepositories
    ).toPromise();

    expect(dispatched).toContainEqual(
      RepositoriesAction.getSuccess(["Repo1", "Repo 2"])
    );
  });
});
