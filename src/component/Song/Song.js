import * as React from 'react';
import PropTypes from 'prop-types';
import Style from './style';

const { Song, SongName, SongSpanContainer, SongSpanNumber } = Style;

class SongComponent extends React.PureComponent
{
  render() {

    const SongSpanNumbers = () => this.props.datasource.map(songNumber => {
      const key = `${this.props.name}_${songNumber}`
      return (
        <SongSpanNumber key={key}>{songNumber}</SongSpanNumber>
      )
    })
    return(
      <Song className="uk-flex">
        <SongName className="uk-width-2-3">
          <span>{this.props.name}</span>
        </SongName>
        <SongSpanContainer className="uk-flex uk-width-1-1">
          <SongSpanNumbers />
        </SongSpanContainer>
      </Song>
    )
  }
}

SongComponent.propTypes = {
  name: PropTypes.string.isRequired,
  datasource: PropTypes.array.isRequired,
}

export default SongComponent;