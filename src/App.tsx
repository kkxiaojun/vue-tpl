import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  render(h) {
    return (
      <div id="app">
        <router-view className="appContainer" />
      </div>
    );
  }
}
