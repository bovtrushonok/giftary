import { Switch } from '../sharedViews/switch';
import { Slider } from '../sharedViews/slider';
import { Input } from '../sharedViews/input';

export const SwitchComponent = () => (
  <Switch>
    <Input type="checkbox" width="0" opacity="0" margin="0" />
    <Slider />
    <span>My gifts &#127873;</span>
    <span>My events &#127881;</span>
  </Switch>
);
