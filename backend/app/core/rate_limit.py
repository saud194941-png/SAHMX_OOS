from collections import defaultdict
from time import time

_hits: dict[str, list[float]] = defaultdict(list)


def allow_request(key: str, limit: int = 120, window_seconds: int = 60) -> bool:
    now = time()
    _hits[key] = [stamp for stamp in _hits[key] if now - stamp < window_seconds]
    if len(_hits[key]) >= limit:
        return False
    _hits[key].append(now)
    return True
