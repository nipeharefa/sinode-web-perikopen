import * as React from 'react';
import loadable from '@loadable/component';
import PropTypes from 'prop-types';
import Repository from '../../repository';
import Style from './style';

const Translation = loadable(() => import('../../translation/Translation'));
const VerseComponent = loadable(() => import(/* webpackChunkName: "Verse" */ './Verse'));

const {
  BookName,
  ContainerReadlist,
  ReadList,
  Subsection,
  Verse,
} = Style;

const { getPerikopenReadingList } = Repository;

class ReadingList extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      readingList: [],
    }
  }
  componentDidMount() {
    this.getReadingList()
  }
  componentDidUpdate(previousProps) {
    if (previousProps.perikopenId !== this.props.perikopenId) {
      this.getReadingList();
    }
  }
  getReadingList = async () => {
    try {
      const id = this.props.perikopenId;

      const { data } = await getPerikopenReadingList(id);
      this.setState({
        readingList: data,
      })
    } catch (err) {}
  }
  render() {
    return (
      <React.Fragment>
        {/* <span>Bahan Bacaan</span> */}
        <ContainerReadlist>
          {this.state.readingList.map(x => (
            <ReadList
              className="uk-flex"
              key={x.id + Math.random()}>
              <BookName>
                <span>
                  <Translation translationID={x.book.key} />
                </span>
              </BookName>
              <Subsection data-perikopen="subsections">
                <span className="uk-text">{x.section}</span>
              </Subsection>
              <Verse>
                <VerseComponent {...x}/>
              </Verse>
            </ReadList>
            ))}
        </ContainerReadlist>
      </React.Fragment>
    )
  }
}

ReadingList.propTypes = {
  perikopenId: PropTypes.number.isRequired,
};

export default ReadingList;