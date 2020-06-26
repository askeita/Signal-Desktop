export function markEverDone() {
  // @ts-ignore
  window.storage.put('chromiumRegistrationDoneEver', '');
}

export function markDone() {
  markEverDone();
  window.storage.put('chromiumRegistrationDone', '');
}

export function remove() {
  window.storage.remove('chromiumRegistrationDone');
}

export function isDone() {
  return window.storage.get('chromiumRegistrationDone') === '';
}

export function everDone() {
  return window.storage.get('chromiumRegistrationDoneEver') === '' || isDone();
}
