import { Switch } from '../sharedViews/switch';
import { Slider } from '../sharedViews/slider';
import { Input } from '../sharedViews/input';

export const SwitchComponent = () => {
  return (
    <Switch>
      <span>My gifts &#127873;</span>
      <span>My events &#127881;</span>
      <Input type="checkbox" width="0" opacity="0" margin="0"/>
      <Slider/>
    </Switch>
  )
}
