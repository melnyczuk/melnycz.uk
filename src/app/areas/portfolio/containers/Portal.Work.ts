import { connect } from 'react-redux';

import {
  Portal, 
  PortalProps, 
} from '../../../../components/Portal';

import {
  mediaSelectors,
} from '../../../../store/works/works.selectors';

import {
  StoreType,
  ContainerType,
} from '../../../../store/types';

const mapStateToProps = (
  state: StoreType,
  props: PortalProps
): PortalProps => ({
  ...props,
  baseBinUrl: mediaSelectors.selectBinBaseUrl(state),
  images: mediaSelectors.selectImages(state, props),
});

export default connect
  <PortalProps, PortalProps, ContainerType>
  (mapStateToProps)
  (Portal);
