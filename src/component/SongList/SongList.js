import * as React from 'react';
import PropTypes from 'prop-types';
import Style from './style';
import Song from '../Song';
import Repository from '../../repository';

const { SongContainer } = Style;
const { getKJByPerikopen, getBZByPerikopen } = Repository;

// 1 -> 2
class SongList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      kjDataSource: [],
      bzDataSource: [],
    }
  }
  componentDidMount() {
    // Fungsi()
    this.getSonglist();
  }

  getSonglist () {
    this.getKJList()
    this.getBZList()

  }

  getKJList = async () => {
    try {
      const id = this.props.perikopenId;
      const { data } = await getKJByPerikopen(id);
      
      this.setState({
        kjDataSource: data,
      })

    } catch(e) {
      console.error(e)
    }
  }

  getBZList = async () => {
    try {
      const id = this.props.perikopenId;
      const { data } = await getBZByPerikopen(id)
      
      this.setState({
        bzDataSource: data,
      })

    } catch(e) {
      console.error(e)
    }
  }
  componentDidUpdate(previousProps) {
    if (previousProps.perikopenId !== this.props.perikopenId) {
      this.getSonglist();
    }
  }
  render() {
    const kjDataSource = this.state.kjDataSource.map(kj => kj.kidungJemaat.songNumber)
    return(
      <SongContainer>
        <span>Kidung Pujian</span>
        <Song name="Kidung Jemaat" datasource={kjDataSource}/>
        <Song name="Buku Zinuno" datasource={kjDataSource}/>
      </SongContainer>
    )
  }
}

SongList.propTypes = {
  perikopenId: PropTypes.number.isRequired,
};

export default SongList;