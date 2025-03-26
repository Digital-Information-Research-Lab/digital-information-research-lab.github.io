<a name="ProductCard"></a>

## ProductCard(props) ⇒ [`ProductCard`](#ProductCard)
**Kind**: global function  
**Summary**: When the ProducerChoice stage ends, this component is called for the consumer to display purchasable products.  
**Returns**: [`ProductCard`](#ProductCard) - This function returns the ProductCard component.  

| Param | Type | Description |
| --- | --- | --- |
| props | `object` | The props param is the producer's attributes sent to the component to render each producer's product for each consumer. |


* [ProductCard(props)](#ProductCard) ⇒ [`ProductCard`](#ProductCard)
    * [~getFinalPrice()](#ProductCard..getFinalPrice) ⇒ `productPrice`
    * [~UpdateBasket()](#ProductCard..UpdateBasket) ⇒ `none`

<a name="ProductCard..getFinalPrice"></a>

### ProductCard~getFinalPrice() ⇒ `productPrice`
This function checks if the producer has a warrant and adds the warrant cost to the product price if they do.

**Kind**: inner method of [`ProductCard`](#ProductCard)  
**Summary**: Helper function to calculate the final price of the product for display.  
**Returns**: `productPrice` - This function returns the final price of the product.  

| Type | Description |
| --- | --- |
| `void` | This function does not take any parameters. |

<a name="ProductCard..UpdateBasket"></a>

### ProductCard~UpdateBasket() ⇒ `none`
**Kind**: inner method of [`ProductCard`](#ProductCard)  
**Summary**: - This function updates the consumer player's cart and wallet.  
**Returns**: `none` - This function does not return anything.  

| Param | Type | Description |
| --- | --- | --- |
|  | `void` | This function does not take any parameters. |

