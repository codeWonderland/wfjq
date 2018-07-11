# WFJQ - Wait For jQuery!
A tool for running scripts when jQuery is loaded

## Usage
Using wfjq is easy! Just call the function `wfjq(cb)` with cb being your callback function.

### Additional Configuration
Just waiting for jQuery would be too simple. wfjq takes a second optional parameter, an options object, that can allow for a more versatile system.

Ex.
```js
{
  "numTries" : 17,
  "onFail" : failFuncName
}
```
#### keepTrying : boolean
This parameter will tell wfjq to keep running until jQuery is loaded, regardless of the wait time. Note that this will override numTries

#### numTries : int
This is the number of times that wfjq will try to check for jQuery. After the number has run down, wfjq will run the onFail callback if possible, or just call it a day if not.

#### onFail : boolean
This parameter takes in a callback function to be run in the event that jQuery is not loaded, that way your user can still have a pleasant experience :3

## License
This project is licensed under the MIT License
