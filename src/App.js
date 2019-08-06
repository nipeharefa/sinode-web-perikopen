import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import React, { Component } from 'react';
import UIkit from 'uikit';
import HomeStyled from './pages/Home/style';
// import "./App.css"
import { GetPerikopenByDate } from './service/perikopen';
import DatePicker from './component/DatePicker';

const {
  ContainerReadlist,
  HeadInfo,
  Readlist,
  FabButton,
  InfoDate,
  BookName,
  SongSpanContainer,
  SongContainer,
  SongName,
  Song,
  SongSpanNumber,
  Subsection,
  Verse,
} = HomeStyled;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
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
    try {
      const result = await GetPerikopenByDate('2019-01-01 00:00:00')
      if (result.data.length > 0) {
        this.setState({
          activePerikopen: result.data[0]
        })
      }
      console.log(result)
    } catch(e) {

    }
  }
  handleDatePick = async(x) => {
    try {

      const data = x.format('YYYY-MM-DD 00:00:00')
      const result = await GetPerikopenByDate(data)
      if (result.data.length > 0) {
        this.setState({
          activePerikopen: result.data[0]
        })
      }
    } catch(e) {}
  }
  render() {
    const arrayBacaan = [
      {
        "name": "Markus",
        "verses": []
      },
      {
        "name": "Matius",
        "verses": []
      },
      {
        "name": "Kisah Para Rasul",
        "verses": []
      },
      {
        "name": "Kisah Para Rasul",
        "verses": [],
        "isMemorize": true,
      }
    ]
    return (
      <div className="App">

        <HeadInfo className="uk-flex">
          <InfoDate className="uk-flex uk-flex-column">
            <span className="uk-text-large uk-text-bold">01</span>
            <span>JAN</span>
          </InfoDate>
          <div className="uk-flex uk-flex-column uk-height-1-1">
            <span>{ this.state.activePerikopen.week.code }</span>
            <span>{ this.state.activePerikopen.worship.key }</span>
          </div>
        </HeadInfo>

        <div>
          <div>
            <span>Bahan Bacaan</span>
            <ContainerReadlist>
              {arrayBacaan.map(x => (
                <Readlist
                  className="uk-flex"
                  key={x.name.toLowerCase() + Math.random()}>
                  <BookName>
                    <span>{ x.name }</span>
                  </BookName>
                  <Subsection data-perikopen="subsections">
                    <span className="uk-text">100</span>
                  </Subsection>
                  <Verse>
                    1 - 11
                  </Verse>
                </Readlist>
              ))}
            </ContainerReadlist>
          </div>
          <SongContainer>
            <span>Kidung Pujian</span>
            {/* Kidung Jemaat */}
            <Song className="uk-flex">
              <SongName className="uk-width-2-3">
                <span>Kidung Jemaat</span>
              </SongName>
              <SongSpanContainer className="uk-flex uk-width-1-1">
                <SongSpanNumber>10</SongSpanNumber>
                <SongSpanNumber>10</SongSpanNumber>
                <SongSpanNumber>10</SongSpanNumber>
                <SongSpanNumber>10</SongSpanNumber>
              </SongSpanContainer>
            </Song>
            {/* Buku Zinuno */}
            <Song className="uk-flex">
              <SongName className="uk-width-2-3">
                <span>Buku Zinuno</span>
              </SongName>
              <SongSpanContainer className="uk-flex uk-width-1-1">
                <SongSpanNumber>9</SongSpanNumber>
                <SongSpanNumber>9</SongSpanNumber>
                <SongSpanNumber>9</SongSpanNumber>
                <SongSpanNumber>9</SongSpanNumber>
                <SongSpanNumber>9</SongSpanNumber>
                <SongSpanNumber>9</SongSpanNumber>
              </SongSpanContainer>
            </Song>
          </SongContainer>
        </div>
        <FabButton onClick={() => this.setState({ focused: true })}>+</FabButton>
        <div id="my-id" data-uk-modal="true">
          <div className="uk-modal-dialog uk-modal-body">
              <div>
                <DatePicker
                  onFocusChange={({focused}) => { this.setState({ focused })}}
                  handleDatePick={this.handleDatePick}
                  focused={this.state.focused}
                />
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
