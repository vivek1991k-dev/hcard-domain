# hCard App

## Run the app

1. Clone the repo to the local machine.
2. Open the command terminal in the project location.
3. Run `npm install`. This should install all the project dependencies
4. Run `npm run start`, to run the app in port 3000.

## Design of the app

Both the form and the card are generated using metadata.\
Form - src/metadata/form-metadata.ts\
Card - src/metadata/card-metadata.ts

Adding more fields in the form-metadata will render the form and it will take care of storing the item in the state as well.\
In order to visualise the fields, relative changes needs to be made in the card-metadata file.

The state management of the app is done using recoil.

### Form metadata

### Card metadata

## Total time spent

1 hour: Going through the requirements and deciding on the third party libraries.\
1 hour: Basic prototyping using recoil and antd components.\
1 hour: Designing the metadata for forms and generating the components based on the metadata.\
1 hour: Designing the metadata for the card and generating the components.\
2 hours: Styling the components and adding additional features.\
Total time spent: 6 hours

## Additional Features

1. In mobiles, in landscape mode, the card is displayed at the top and the form is displayed at the bottom. When the user scrolls down, a 'Back to top' button is rendered which allows the user to quickly see the generated card.
2. The 'Upload Avatar' button also acts as a 'Back to top' button.
3. Data is truncated if the space provided in the card is not enough for display.
4. Create hCard button stores the current information in the form to the local storage.

## Limitations

1. The 'Upload Avatar' doesn't open the file browser. This can be implemented using a (<input type="file" accept="image/x-png,image/gif,image/jpeg" />), but it felt unnecessary since the file browser doesn't need to do anything.
2. The app has empty spaces at the top and the bottom since both the form and the card are vertically centered. It would have been better if there was more content to fill the spaces.

## Available Scripts

In the project directory, you can run:

### `npm install`

To install all the dependencies of the project.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run coverage`

Launches the test runner in the interactive watch mode and produces the coverage report.\
