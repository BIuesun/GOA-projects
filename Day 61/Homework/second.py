def manual_sort(arr):
    n = len(arr)  # gavigot sigrze

    for i in range(n):
        # tu elementi shemdegze didia adgils shevucvlit
        for j in range(0, n - i - 1):  # -i amcirebs shedarebebs yoveljerze
            # shevadarot axlandeli elementi (arr[j]) shemdegze (arr[j + 1])
            if arr[j] > arr[j + 1]:
                # shevucvalot adglilebi tu erti da imaveebia
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

    return arr
