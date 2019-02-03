import { connect } from 'react-redux';

import Portal from '../../../../../components/portal/Portal';

import {
  portal,
} from '../../../../../store/areas/primary/works/works.selectors';

const mapStateToProps = (state, props) => ({
  baseBinUrl: portal.selectBinBaseUrl(state),
  images: portal.selectImages(state, props),
});

export default connect(mapStateToProps)(Portal);
