import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import React, { Component } from 'react';
import UIkit from 'uikit';
import { SingleDatePicker } from 'react-dates';
import HomeStyled from './pages/Home/style';
import "./App.css"

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
    };
  }
  componentDidMount() {
    // console.log(UIkit.modal('#my-id'));
  }
  handleDatePick = async() => {
    // console.log()
    // alert();
    UIkit.modal('#my-id').hide();
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
            <span>Tahun Baru</span>
            <span>Ephipanias</span>
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
              <h2 className="uk-modal-title">Headline</h2>
              <p>Lorem ipsum dolor sit amet, .</p>
              <div>
                <SingleDatePicker
          date={this.state.startDate}
          onDateChange={(x) => console.log(x)}
          focused={this.state.focused}
          onFocusChange={({focused}) => { this.setState({ focused })}}
          id="your_unique_id"
          enableOutsideDays={false}
          numberOfMonths={1}
          withFullScreenPortal={true}
        />

              </div>
              <p className="uk-text-right">
                  <button
                    onClick={this.handleDatePick}
                    className="uk-button uk-button-primary"
                    type="button">Save</button>
              </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
