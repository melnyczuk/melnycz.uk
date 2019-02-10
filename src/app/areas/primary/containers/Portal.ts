import { connect } from 'react-redux';

import Portal, { PortalProps } from '../../../../components/portal/Portal';

import {
  portal,
} from '../../../../store/areas/primary/works/works.selectors';

import {
  StoreState,
  Container,
} from '../../../../store/store';s

const mapStateToProps = (
  state: StoreState,
  props: PortalProps
): PortalProps => ({
  ...props,
  baseBinUrl: portal.selectBinBaseUrl(state),
  images: portal.selectImages(state, props),
});

export default connect<PortalProps, Container>(mapStateToProps)(Portal);
