import subprocess

def get_modified_files(include_untracked=False):
    """Get a list of modified (and optionally untracked) files."""
    if include_untracked:
        result = subprocess.run(["git", "status", "--porcelain"], capture_output=True, text=True)
        # Include both modified and untracked files (those that start with " M" or "??")
        files = [line[3:] for line in result.stdout.splitlines() if line.startswith((" M", "??"))]
    else:
        result = subprocess.run(["git", "status", "--porcelain"], capture_output=True, text=True)
        # Only include modified files (those that start with " M")
        files = [line[3:] for line in result.stdout.splitlines() if line.startswith(" M")]
    return files

def add_and_commit(file):
    """Stage a file and commit with a custom message."""
    subprocess.run(["git", "add", file])
    commit_msg = input(f"Enter commit message for '{file}': ")
    subprocess.run(["git", "commit", "-m", commit_msg])
    print(f"Committed '{file}' with message: '{commit_msg}'")

def main():
    # Prompt user to include untracked files
    include_untracked = input("Include untracked files? (y/n): ").strip().lower() == 'y'
    files = get_modified_files(include_untracked=include_untracked)

    if not files:
        print("No files to process.")
        return

    for file in files:
        action = input(f"Do you want to add and commit '{file}'? (y to add, s to skip, q to quit): ").strip().lower()

        if action == "y":
            add_and_commit(file)
        elif action == "s":
            print(f"Skipped '{file}'")
        elif action == "q":
            print("Quitting script.")
            break
        else:
            print("Invalid option. Skipping file.")

    # After all files are processed, ask if user wants to push
    push_response = input("Do you want to push all committed changes? (y/n): ").strip().lower()
    if push_response == "y":
        # branch_name = subprocess.run(["git", "rev-parse", "--abbrev-ref", "HEAD"], capture_output=True, text=True).stdout.strip()
        subprocess.run(["git", "push"])
        # subprocess.run(["git", "push", "origin", branch_name])
        print("Changes pushed to the remote repository.")
    else:
        print("Push skipped.")

if __name__ == "__main__":
    main()
