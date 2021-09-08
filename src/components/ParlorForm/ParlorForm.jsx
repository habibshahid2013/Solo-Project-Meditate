import React from 'react'
import PlacesAutocomplete from 'react-places-autocomplete';

import {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
} from 'react-places-autocomplete';

class LocationSearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { address: '' };
    }

    handleChange = address => {
        this.setState({ address });
    };

    handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error));
    };

    render() {
        return (
            <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <input
                            {...getInputProps({
                                placeholder: 'Search Places ...',
                                className: 'location-search-input',
                            })}
                        />
                        <div className="autocomplete-dropdown-container">
                            {loading && <div>Loading...</div>}
                            {suggestions.map(suggestion => {
                                const className = suggestion.active
                                    ? 'suggestion-item--active'
                                    : 'suggestion-item';
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                return (
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                            style,
                                        })}
                                    >
                                        <span>{suggestion.description}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
        );
    }
}


<script async
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD5qTK8TuimMvnCjRd4AAJ7bUVkHwyn8Uw&libraries=places&callback=initMap">
</script>

class ParlorForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.initialState()
        this.handlePlaceSelect = this.handlePlaceSelect.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.autocomplete = null
    }

    componentDidMount() {
        this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), {})

        this.autocomplete.addListener("place_changed", this.handlePlaceSelect)
    }

    initialState() {
        return {
            name: '',
            street_address: '',
            city: '',
            state: '',
            zip_code: '',
            googleMapLink: ''
        }
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.dispatch(addParlor(this.state))
        this.clearForm()
    }

    handlePlaceSelect() {
        let addressObject = this.autocomplete.getPlace()
        let address = addressObject.address_components
        this.setState({
            name: addressObject.name,
            street_address: `${address[0].long_name} ${address[1].long_name}`,
            city: address[4].long_name,
            state: address[6].short_name,
            zip_code: address[8].short_name,
            googleMapLink: addressObject.url
        })
    }

    render() {
        return (
            <div>
                <h1>Add New Parlor</h1>
                <form onSubmit={this.handleSubmit}>
                    <input id="autocomplete"
                        className="input-field"
                        ref="input"
                        type="text" />
                    <input
                        name={"name"}
                        value={this.state.name}
                        placeholder={"Name"}
                        onChange={this.handleChange}
                    />
                    <input
                        name={"street_address"}
                        value={this.state.street_address}
                        placeholder={"Street Address"}
                        onChange={this.handleChange}
                    />
                    <input
                        name={"city"}
                        value={this.state.city}
                        placeholder={"City"}
                        onChange={this.handleChange}
                    />
                    <input
                        name={"state"}
                        value={this.state.state}
                        placeholder={"State"}
                        onChange={this.handleChange}
                    />
                    <input
                        name={"zip_code"}
                        value={this.state.zip_code}
                        placeholder={"Zipcode"}
                        onChange={this.handleChange}
                    />
                    <button onSubmit={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }

}

export default ParlorForm