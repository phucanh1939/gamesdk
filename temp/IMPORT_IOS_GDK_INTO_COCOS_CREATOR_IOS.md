# Steps:
- Copy gdk.framework to `native/engine/ios/`
- Open xcode project, drag and drop `.framework` into the project. This will set the `Framework Search Paths` in `Build Setting` to `native/engine/ios` (Where our framework placed in step 1)
- Add `@executable_path/Frameworks` to `Build Setting` > `Runpath Search Path`
    -> it tells the app where to find embedded frameworks after they’re bundled. The framework will be located in a Frameworks folder inside the .app bundle after building.