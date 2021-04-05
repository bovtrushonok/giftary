import { Switch, Slider, Input } from '../sharedViews/index';

export const SwitchComponent = () => (
  <Switch>
    <Input type="checkbox" width="0" opacity="0" margin="0" />
    <Slider />
    <span>My gifts &#127873;</span>
    <span>My events &#127881;</span>
  </Switch>
);
