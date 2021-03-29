import { Switch, Input, Slider} from '../sharedViews/switcher';

export const SwitchComponent = () => {
  return (
    <Switch>
      <span>My gifts &#127873;</span>
      <span>My events &#127881;</span>
      <Input type="checkbox"/>
      <Slider/>
  </Switch>
  )
}
