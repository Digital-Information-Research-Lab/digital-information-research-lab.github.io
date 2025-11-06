<a name="ResultsCard"></a>

## ResultsCard(props) ⇒ [`ResultsCard`](#ResultsCard)
**Kind**: global function  
**Summary**: When the FeedbackChoice stage ends, this component is called for the consumer to display results.  
**Returns**: [`ResultsCard`](#ResultsCard) - This function returns the ResultsCard component.  

| Param | Type | Description |
| --- | --- | --- |
| props | `object` | The props param is the producer's attributes sent to the component to render each consumer's final round results. |

<a name="ResultsCard..getDisplayedMessage"></a>

### ResultsCard~getDisplayedMessage() ⇒ `ProductCard`
This function checks the challenge result and displays the appropriate message.

**Kind**: inner method of [`ResultsCard`](#ResultsCard)  
**Summary**: Helper function to display the challenge result message.  
**Returns**: `ProductCard` - This function returns the appropriate message to be displayed.  
**Params**: index, roundScore - The params are the index of the producer(because of the sorting necessity) and the round score of the consumer.  
