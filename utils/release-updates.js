import axios from 'axios';

export default function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Extract the necessary data from the request body
      const { releaseNumber, releaseDetails } = req.body;

      // Perform any necessary validations or transformations on the data

      // Trigger the Deploy Hook by sending a POST request
      triggerDeployHook(releaseNumber, releaseDetails);

      // Respond with a success message
      res.status(200).json({ message: 'Webhook received successfully.' });
    } catch (error) {
      console.error('Error handling webhook:', error);
      res.status(500).json({ message: 'Error handling webhook.' });
    }
  } else {
    res.status(404).json({ message: 'Not found.' });
  }
}

function triggerDeployHook(releaseNumber, releaseDetails) {
  try {
    // Make a POST request to the Vercel Deploy Hook URL
    axios.post('https://api.vercel.com/v1/integrations/deploy/prj_AtFmTIhsrakTwrmpCbJCHhUh98ob/Yq5la1VSHE')
      .then(response => {
        // Handle the response, if needed
        console.log('Deploy Hook triggered successfully.');
      })
      .catch(error => {
        console.error('Error triggering Deploy Hook:', error);
        // Handle error accordingly
      });

    // Example: Log the release details
    console.log('New release details:', releaseDetails);
  } catch (error) {
    console.error('Error triggering Deploy Hook:', error);
    // Handle error accordingly
  }
}
