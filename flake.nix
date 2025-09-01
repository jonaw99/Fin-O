{
  description = "Python dev environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs =
    { self, nixpkgs }:
    let
      inherit (nixpkgs) lib;

      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};
      python = pkgs.python313;
    in
    {
      devShells.${system}.default = pkgs.mkShell {
        packages = [
          python
          pkgs.uv
        ];

        env = {
          UV_PYTHON_DOWNLOADS = "never";
          UV_PYTHON = python.interpreter;
          LD_LIBRARY_PATH = lib.makeLibraryPath pkgs.pythonManylinuxPackages.manylinux1;
        };

        shellHook = ''
          unset PYTHONPATH
        '';
      };
    };
}
