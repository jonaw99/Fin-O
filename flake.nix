#######################
### Ignore all this ###
#######################
{
  description = "Python dev environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        inherit (nixpkgs) lib pyproject-nix;

        pkgs = import nixpkgs { inherit system; };
        python = pkgs.python313;
        pythonPackages = pkgs.python313Packages;

      in
      (final: {
        #######################
        ## Ignore until here ##
        #######################
        # This thing creates a devshell and is mostly for me, so I don't have to install all those dirty python & javascript dependencies on my system
        devShells.default = pkgs.mkShell {
          inputsFrom = final.packages.backend;

          env = {
            UV_PYTHON_DOWNLOADS = "never";
            UV_PYTHON = python.interpreter;
            LD_LIBRARY_PATH = lib.makeLibraryPath pkgs.pythonManylinuxPackages.manylinux1;
          };

          shellHook = ''
            unset PYTHONPATH
          '';
        };

        # This here are the compiled backend & frontend, this will be build by docker
        # TODO: Wo kann ich den port ändern? 8000 ist schon in benutzung
        packages.backend = pkgs.stdenv.mkDerivation (finalAttrs: {
          pname = "Fin-O-backend";
          version = "git";
          src = ./backend;
          nativeBuildInputs = [
            python
            pkgs.uv
          ];
          buildInputs = [
          ]
          ++ (with pythonPackages; [
            django
          ]);
        });
        defaultPackage = final.packages.backend;

        # packages.frontend = ;
      })
    );
}
