import React, { PropTypes, Component } from 'react';
import loadGoogleMapsAPI from 'load-google-maps-api';
import makeBem from 'bem-cx';
import cookie from 'react-cookie';
import { djavanTheme } from '../../../constants/djavanTheme';
import { isClient } from '../../../utils';

const bem = makeBem('djavanFormElement');

export default class DjavanLocationInput extends Component {
  static propTypes = {
    label: PropTypes.string,
    hint: PropTypes.string,
    help: PropTypes.string,
    error: PropTypes.string,
    disabled: PropTypes.bool,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    preventLoadGoogleMapsAPI: PropTypes.bool,
    required: PropTypes.bool,
  }

  static defaultProps = {
    label: '',
    hint: '',
    help: '',
    error: '',
    disabled: false,
    value: '',
    preventLoadGoogleMapsAPI: false,
    required: false,
  }

  state = {
    value: this.props.value,
    locationSuggestions: [],
  }

  componentDidMount() {
    if (isClient()) {
      if (!window.google && !this.props.preventLoadGoogleMapsAPI) {
        loadGoogleMapsAPI({
          key: 'AIzaSyAV51lUjjmUOsTMEkZydb54U8XRGDH7E7s',
          libraries: ['places'],
        })
        .then((google) => {
          this.google = google;
          this.initializePlacesAutocomplete();
        })
        .catch((err) => {
          console.error(err);
        });
      } else {
        // Waiting for the gmaps api to load
        // Not so elegant but it does the job.
        const timer = setInterval(() => {
          if (window.google) {
            clearInterval(timer);
            this.initializePlacesAutocomplete();
          }
        }, 100);
      }
    }
  }

  onUpdateInput(input) {
    this.props.onChange(input);
    this.setState({
      value: input,
    });
  }

  initializePlacesAutocomplete() {
    const google = this.google || window.google;

    if (!google) {
      throw new Error('Google maps api should be loaded to use autocomplete');
    }

    const pacInput = document.getElementById('pac-input');
    const places = google.maps ? google.maps.places : google.places;
    const autocomplete = new places.Autocomplete(pacInput);
    autocomplete.setTypes(['(cities)']);

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      this.props.onChange(place.formatted_address);
      this.setState({
        value: place.formatted_address,
      });
    });
  }

  render() {
    return (
      <div className={bem}>
        <div className={bem.el('label').mod({ required: this.props.required })}>{this.props.label}</div>
        <input
          id="pac-input"
          disabled={this.props.disabled}
          className={bem.el('textarea').mod({ error: !!this.props.error })}
          value={this.state.value}
          onChange={(evt) => this.onUpdateInput(evt.target.value)}
          placeholder={this.props.hint}
        />
        {(this.props.error || this.props.help) &&
          <div className={bem.el('message').mod({ error: !!this.props.error, help: !this.props.error && this.props.help })}>
            {this.props.error || this.props.help}
          </div>
        }
      </div>
    );
  }

}
