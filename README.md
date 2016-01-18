# dayone-to-quiver [![Build Status](https://travis-ci.org/azu/dayone-to-quiver.svg?branch=master)](https://travis-ci.org/azu/dayone-to-quiver)

Convert DayOne's Journal.dayone to [Quiver notebook](https://github.com/HappenApps/Quiver/wiki/Quiver-Data-Format "Quiver notebook") file.

## Support

- [x] created_at
- [x] updated_at is same with created_at
- [x] tags
- [x] title
- [x] content
- [x] uuid
- [ ] Image

```
{
  "created_at" : 1417080157,
  "tags" : [
    "quiver"
  ],
  "title" : "02 - Cells",
  "updated_at" : 1417080595,
  "uuid" : "9686AA1A-A5E9-41FF-9260-C3E0D0E9D4CB"
}
```

- [Quiver Data Format · HappenApps/Quiver Wiki](https://github.com/HappenApps/Quiver/wiki/Quiver-Data-Format "Quiver Data Format · HappenApps/Quiver Wiki")

## Installation

     npm install -g dayone-to-quiver

## Usage

```sh
$ dayone-to-quiver --entry Journal.dayone --output output.qvnotebook

    --entry path to Journal.dayone
    --output output path
```

Convert DayOne's Journal.dayone to [Quiver notebook](https://github.com/HappenApps/Quiver/wiki/Quiver-Data-Format "Quiver notebook") format.

## Tests

    npm test
    # example
     ./bin/cmd.js --entry test/fixtures/Journal.dayone --output test/fixtures/Tutorial.qvnotebook


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT