import { Module, VuexModule, Mutation } from 'vuex-module-decorators';

@Module({ namespaced: true, name: 'user' })
export default class User extends VuexModule {
  systemId: number = null;
  accessToken = '';
  name = '';
  userId: number = null;

  @Mutation
  setUser(user: UserData) {
    this.systemId = user.systemId;
    this.accessToken = user.accessToken;
    this.name = user.name;
    this.userId = user.userId;
  }

  @Mutation
  clearUser() {
    this.systemId = null;
    this.accessToken = '';
    this.name = '';
    this.userId = null;
  }
}
