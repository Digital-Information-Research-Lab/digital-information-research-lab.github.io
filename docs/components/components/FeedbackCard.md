<a name="FeedbackCard"></a>

## FeedbackCard(props) ⇒ [`FeedbackCard`](#FeedbackCard)
**Kind**: global function  
**Summary**: When the ConsumerChoice stage ends, this component is called for the consumer to display.  
**Returns**: [`FeedbackCard`](#FeedbackCard) - This function returns the FeedbackCard component.  

| Param | Type | Description |
| --- | --- | --- |
| props | `object` | The props param is the producer's attributes sent to the component to render feedback for each consumer. |


* [FeedbackCard(props)](#FeedbackCard) ⇒ [`FeedbackCard`](#FeedbackCard)
    * [~positive(none)](#FeedbackCard..positive) ⇒ `void`
    * [~negative(none)](#FeedbackCard..negative) ⇒ `void`
    * [~UpdateWarrant(none)](#FeedbackCard..UpdateWarrant) ⇒ `void`

<a name="FeedbackCard..positive"></a>

### FeedbackCard~positive(none) ⇒ `void`
**Kind**: inner method of [`FeedbackCard`](#FeedbackCard)  
**Summary**: When the consumer manually rates the producer positively, this function is called.  
**Returns**: `void` - This function logs the rating status and the consumerReviews hash as positive.  

| Param | Type | Description |
| --- | --- | --- |
| none | `none` | This function does not take any parameters. |

<a name="FeedbackCard..negative"></a>

### FeedbackCard~negative(none) ⇒ `void`
**Kind**: inner method of [`FeedbackCard`](#FeedbackCard)  
**Summary**: When the consumer manually rates the producer negatively, this function is called.  
**Returns**: `void` - This function logs the rating status and the consumerReviews hash as negative.  

| Param | Type | Description |
| --- | --- | --- |
| none | `none` | This function does not take any parameters. |

<a name="FeedbackCard..UpdateWarrant"></a>

### FeedbackCard~UpdateWarrant(none) ⇒ `void`
**Kind**: inner method of [`FeedbackCard`](#FeedbackCard)  
**Summary**: When the consumer chooses to challenge a warrant, this function is called to log/unlog a challenge.  
**Returns**: `void` - This function pushes/pops a challenge and updates the wallet based on their decision.
indexOf returns -1 if element is not in array.  

| Param | Type | Description |
| --- | --- | --- |
| none | `none` | This function does not take any parameters. |

