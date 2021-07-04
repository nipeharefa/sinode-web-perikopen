import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import loadable from '@loadable/component';
import React, { Component } from 'react';
import HomeStyled from './pages/Home/style';
import { GetPerikopenByDate } from './service/perikopen';
import { SongList } from './component';

const Translation = loadable(() => import(/* webpackChunkName: "Translation" */ './translation/Translation'));
const DatePicker = loadable(() => import(/* webpackChunkName: "DatePicker" */ './component/DatePicker'));
const ReadingList = loadable(() => import(/* webpackChunkName: "ReadingList" */ './component/ReadingList'));

const {
  HeadInfo,
  FabButton,
  InfoDate
} = HomeStyled;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: null,
      focused: false,
      activePerikopen: {
        id: 0,
        week: {
          id: 0,
          code: "new_year"
        },
        worship: {
          id: 0,
          key: 'new_year'
        }
      },
    };
  }
  componentDidMount() {
    this.getInitialPerikopen()
  }
  getInitialPerikopen = async() => {
    const selectedDate = moment("20190101", "YYYYMMDD")
    try {
      const result = await GetPerikopenByDate('2019-01-01 00:00:00')
      if (result.data.length > 0) {
        this.setState({
          activePerikopen: result.data[0],
          selectedDate,
        })
      }
    } catch(e) {}
  }
  handleDatePick = async(x) => {
    try {
      const data = x.format('YYYY-MM-DD 00:00:00')
      const result = await GetPerikopenByDate(data)
      if (result.data.length > 0) {
        this.setState({
          activePerikopen: result.data[0],
          selectedDate: x,
        })
      }
    } catch(e) {}
  }
  render() {
    let dayNumber = "00";
    let monthName = "";

    if (null !== this.state.selectedDate) {
      dayNumber = this.state.selectedDate.format('DD')
      monthName = this.state.selectedDate.format('MMM')
    }

    return (
      <div className="App">
        <HeadInfo className="uk-flex">
          <InfoDate className="uk-flex uk-flex-column">
            <span className="uk-text-large uk-text-bold">{dayNumber}</span>
            <span>{monthName}</span>
          </InfoDate>
          <div className="uk-flex uk-flex-column">
            <span>
              <Translation translationID={this.state.activePerikopen.week.code} />
            </span>
            <span>
              <Translation translationID={this.state.activePerikopen.worship.key} />
            </span>
          </div>
        </HeadInfo>

        <div>
          {/* Bahan Bacaan */}
          <ReadingList perikopenId={this.state.activePerikopen.id}/>
          {/* end Bahaan Bacaan */}

          {/* SongList Below */}
          <SongList perikopenId={this.state.activePerikopen.id} />
        </div>
        
        <FabButton
          aria-label="Select calendar button"
          onClick={() => this.setState({ focused: true })}>
            <span uk-icon="calendar"></span>
        </FabButton>

        <div id="my-id" data-uk-modal="true">
          <div className="uk-modal-dialog uk-modal-body">
              <React.Fragment>
                <DatePicker
                  onFocusChange={({focused}) => { this.setState({ focused })}}
                  handleDatePick={this.handleDatePick}
                  focused={this.state.focused}
                />
              </React.Fragment>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
