# calculator2

Welcome to your new calculator2 project and to the internet computer development community. By default, creating a new project adds this README and some template files to your project directory. You can edit these template files to customize your project and to include your own code to speed up the development cycle.

To get started, you might want to explore the project directory structure and the default configuration file. Working with this project in your development environment will not affect any production deployment or identity tokens.

To learn more before you start working with calculator2, see the following documentation available online:

- [Quick Start](https://sdk.dfinity.org/docs/quickstart/quickstart.html)
- [SDK Developer Tools](https://sdk.dfinity.org/docs/developers-guide/sdk-guide.html)
- [Motoko Programming Language Guide](https://sdk.dfinity.org/docs/language-guide/motoko.html)
- [Motoko Language Quick Reference](https://sdk.dfinity.org/docs/language-guide/language-manual.html)

If you want to start working on your project right away, you might want to try the following commands:

```bash
cd calculator2/
dfx help
dfx config --help
dfx build
dfx canister install --all 
# or
dfx canister install --all -m reinstall
open 'http://127.0.0.1:8000/candid?canisterId=75hes-oqbaa-aaaaa-aaaaa-aaaaa-aaaaa-aaaaa-q'
```

## Notes

```reason
~/Downloads/MOKOTO/calculator2 master*
❯ dfx build
Building canisters...
Building frontend...

~/Downloads/MOKOTO/calculator2 master*
❯ dfx canister install --all
Installing code for canister calculator2, with canister_id 75hes-oqbaa-aaaaa-aaaaa-aaaaa-aaaaa-aaaaa-q
Replica error (code 5): IC0306: Canister 75hes-oqbaa-aaaaa-aaaaa-aaaaa-aaaaa-aaaaa-q cannot be installed because the canister is not empty. Try installing with mode='reinstall' instead.

~/Downloads/MOKOTO/calculator2 master*
❯ dfx canister install --all -m reinstall
Installing code for canister calculator2, with canister_id 75hes-oqbaa-aaaaa-aaaaa-aaaaa-aaaaa-aaaaa-q
Installing code for canister calculator2_assets, with canister_id cxeji-wacaa-aaaaa-aaaaa-aaaaa-aaaaa-aaaaa-q

<!-- opens candid ui -->
~/Downloads/MOKOTO/calculator2 master*
❯ open 'http://127.0.0.1:8000/candid?canisterId=75hes-oqbaa-aaaaa-aaaaa-aaaaa-aaaaa-aaaaa-q'

```