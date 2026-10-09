<? php
// =====================================================================
// EXCHANGE PAGE - FINAL
// Sab fields active, white background, mobile responsive
// =====================================================================
require_once __DIR__. '/../../layouts/header.php';
require_once __DIR__. '/../../layouts/sidebar.php';

function icon($name) {
    $icons = [
        'plus'     => '<path d="M12 5v14M5 12h14"/>',
        'minus'    => '<path d="M5 12h14"/>',
        'down'     => '<path d="M12 5v14M6 13l6 6 6-6"/>',
        'print'    => '<path d="M6 9V3h12v6M6 18H4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2M6 14h12v7H6z"/>',
        'list'     => '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
        'chevL'    => '<path d="M15 18l-6-6 6-6"/>',
        'chevR'    => '<path d="M9 18l6-6-6-6"/>',
        'share'    => '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 10.5 6.8-4M8.6 13.5l6.8 4"/>',
        'save'     => '<path d="M5 3h12l3 3v15H5zM8 3v6h8V3M8 21v-7h8v7"/>',
        'whatsapp' => '<path d="M17 14c-.5-.3-1.3-.7-1.9-.4-.4.2-.7.9-1 1.1-.2.1-.4.1-.7 0-1-.4-2-1.3-2.7-2.4-.1-.3-.1-.5 0-.7.2-.3.6-.6.6-1s-.5-1.5-.7-2c-.2-.4-.4-.4-.7-.4h-.6c-.2 0-.6.1-.9.4-1 1-1 2.9.5 4.9 1.5 2 3.5 3.7 5.9 4.1.8.2 1.7.1 2.3-.4.5-.4.8-1 .9-1.6.1-.2 0-.4-.2-.5l-1-.5z"/><circle cx="12" cy="12" r="10"/>',
    ];

    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'.$icons[$name].'</svg>';
}

// Demo customers
$customers = [
    ['id' => 1, 'name' => 'Rajesh Kumar', 'mobile' => '9876543210'],
    ['id' => 2, 'name' => 'Priya Sharma', 'mobile' => '9876543211'],
    ['id' => 3, 'name' => 'Amit Patel', 'mobile' => '9876543212'],
];

$showShareButton = !empty($_SESSION['settings']['exchange_share_button']);
?>

    <link rel="stylesheet" href="exchange/exchange.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

            <style id="exchange-bottom-actions-final">
/* =========================================================
                EXCHANGE - BOTTOM 4 ACTION BUTTONS
                Share + WhatsApp | PRINT | Save
                Print is mathematically centered in the LEFT PANEL.
                ========================================================= */

                .exchange-card .final-bottom-actions {
                    width: 100% !important;
                display: grid !important;
                grid-template-columns: 1fr 42px 1fr !important;
                align-items: center !important;
                justify-items: center !important;
                column-gap: 10px !important;
                margin: 18px 0 8px !important;
                padding: 0 8px !important;
                box-sizing: border-box !important;
}

                /* Left side: Share + WhatsApp */
                .exchange-card .final-bottom-actions .bottom-left-actions {
                    width: 100% !important;
                display: flex !important;
                align-items: center !important;
                justify-content: flex-end !important;
                gap: 12px !important;
                padding-right: 4px !important;
                box-sizing: border-box !important;
}

                /* Right side: Save */
                .exchange-card .final-bottom-actions .bottom-right-actions {
                    width: 100% !important;
                display: flex !important;
                align-items: center !important;
                justify-content: flex-start !important;
                gap: 12px !important;
                padding-left: 4px !important;
                box-sizing: border-box !important;
}

                /* All four action buttons same size */
                .exchange-card .final-bottom-actions .btn-bottom-action,
                .exchange-card .final-bottom-actions .icon-whatsapp {
                    width: 42px !important;
                height: 42px !important;
                min-width: 42px !important;
                min-height: 42px !important;
                max-width: 42px !important;
                max-height: 42px !important;

                padding: 0 !important;
                margin: 0 !important;
                border-radius: 50% !important;

                display: inline-flex !important;
                align-items: center !important;
                justify-content: center !important;

                position: static !important;
                transform: none !important;
                left: auto !important;
                right: auto !important;
                top: auto !important;
                bottom: auto !important;

                box-sizing: border-box !important;
                flex: 0 0 42px !important;
}

                /* Keep SVG/icon centered */
                .exchange-card .final-bottom-actions svg {
                    width: 21px !important;
                height: 21px !important;
                display: block !important;
                margin: 0 !important;
}

                /* PRINT stays in the exact middle column */
                .exchange-card .final-bottom-actions #printExchange {
                    grid - column: 2 !important;
                grid-row: 1 !important;
                justify-self: center !important;
                align-self: center !important;
}

                /* Prevent old CSS from moving print */
                .exchange-card .final-bottom-actions .print-center {
                    position: static !important;
                margin: 0 !important;
}

                /* Responsive */
                @media (max-width: 768px) {
    .exchange - card.final - bottom - actions {
                    grid - template - columns: 1fr 40px 1fr !important;
                column-gap: 6px !important;
                margin-top: 15px !important;
                padding: 0 4px !important;
    }

                .exchange-card .final-bottom-actions .bottom-left-actions {
                    gap: 8px !important;
                padding-right: 2px !important;
    }

                .exchange-card .final-bottom-actions .bottom-right-actions {
                    gap: 8px !important;
                padding-left: 2px !important;
    }

                .exchange-card .final-bottom-actions .btn-bottom-action,
                .exchange-card .final-bottom-actions .icon-whatsapp {
                    width: 40px !important;
                height: 40px !important;
                min-width: 40px !important;
                min-height: 40px !important;
                max-width: 40px !important;
                max-height: 40px !important;
                flex-basis: 40px !important;
    }
}
            </style>


            <div class="exchange-wrap">
                <div class="container-fluid">
                    <div class="exchange-card">
                        <div class="row">

                            <!-- ==================== LEFT PANEL ==================== -->
                            <div class="col-lg-6">

                                <!-- BUY / SELL TABS -->
                                <div class="exchange-tabs">
                                    <button type="button" id="tab-buy" class="nav-link active" onclick="switchExchangeMode('buy')">BUY</button>
                                    <button type="button" id="tab-sell" class="nav-link" onclick="switchExchangeMode('sell')">SELL</button>
                                </div>

                                <!-- CUSTOMER -->
                                <div class="field-row">
                                    <div class="field-label">Customer No / Name :</div>
                                    <div class="field-inputs">
                                        <div class="input-group">
                                            <span class="input-group-text bg-white border-end-0 rounded-start-pill">
                                                <i class="bi bi-search"></i>
                                            </span>
                                            <select class="form-select border-start-0 rounded-end-pill" id="customerSearch">
                                                <option value="">Search by Name, No or Mob</option>
                                                <?php foreach ($customers as $customer): ?>
                                                <option value="<?= $customer['id'] ?>">
                                                    <?= htmlspecialchars($customer['name']) ?> (<?= htmlspecialchars($customer['mobile']) ?>)
                                                </option>
                                                <?php endforeach; ?>
                                            </select>
                                        </div>
                                    </div>
                                    <button type="button" class="btn-circle filled" id="addCustomer" title="Add Customer">
                                        <?= icon('plus') ?>
                                    </button>
                                </div>

                                <!-- SELL ONLY -->
                                <div class="field-row sell-only-row" id="sellSampleRow" style="display:none;">
                                    <div class="field-label">Select Sample :</div>
                                    <div class="field-inputs">
                                        <input type="text" class="form-control" id="sellSampleSearch" placeholder="Search Sample...">
                                    </div>
                                </div>

                                <div class="field-row sell-only-row" id="sellTolaRow" style="display:none;">
                                    <div class="field-label">TOLA WEIGHT :</div>
                                    <div class="field-inputs">
                                        <div class="field-unit flex-fill">
                                            <input type="number" step="0.001" class="form-control" id="sellTolaWeight" value="0.000">
                                                <span class="unit-suffix">gm</span>
                                        </div>
                                    </div>
                                </div>

                                <!-- BUY ONLY -->
                                <div class="buy-only-row">
                                    <!-- GROSS / LESS / SAMPLE -->
                                    <div class="field-row">
                                        <div class="field-label">GROSS / LESS / SAMPLE :</div>
                                        <div class="field-inputs tola-three-boxes">
                                            <div class="field-unit flex-fill">
                                                <input type="number" step="0.001" class="form-control" id="grossWeight" placeholder="Gross" value="0.000">
                                                    <span class="unit-suffix">gm</span>
                                            </div>
                                            <div class="field-unit flex-fill">
                                                <input type="number" step="0.001" class="form-control" id="lessWeight" placeholder="Less" value="0.000">
                                                    <span class="unit-suffix">gm</span>
                                            </div>
                                            <div class="field-unit flex-fill">
                                                <input type="number" step="0.001" class="form-control" id="sampleWeight" placeholder="Sample" value="0.000">
                                                    <span class="unit-suffix">gm</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="field-row">
                                        <div class="field-label">WEIGHT (gm) :</div>
                                        <div class="field-inputs">
                                            <div class="field-unit flex-fill">
                                                <input type="number" step="0.001" class="form-control" id="weightLeft" placeholder="0.000" value="0.000">
                                                    <span class="unit-suffix">gm</span>
                                            </div>
                                            <div class="field-unit flex-fill">
                                                <input type="number" step="0.001" class="form-control" id="weightRight" placeholder="0.000" value="0.000">
                                                    <span class="unit-suffix">gm</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="field-row">
                                        <div class="field-label">TOUNCH [%] :</div>
                                        <div class="field-inputs">
                                            <div class="field-unit flex-fill">
                                                <input type="number" step="0.01" class="form-control" id="touchLeft" placeholder="00.00" value="0.00">
                                                    <span class="unit-suffix">%</span>
                                            </div>
                                            <div class="field-unit flex-fill">
                                                <input type="number" step="0.01" class="form-control" id="touchRight" placeholder="00.00" value="0.00">
                                                    <span class="unit-suffix">%</span>
                                            </div>
                                            <label class="touch-100">
                                                <input type="checkbox" id="touch100">
                                                    <span>100%<br>Touch</span>
                                            </label>
                                        </div>
                                    </div>

                                    <hr>

                                        <!-- SILVER -->
                                        <div class="field-row silver-row">
                                            <div class="field-label">SILVER TOUNCH [%] / FINE :</div>
                                            <div class="field-inputs silver-touch-inputs">
                                                <div class="field-unit flex-fill">
                                                    <input type="number" step="0.01" class="form-control" id="silverTouch" placeholder="00.00" value="0.00">
                                                        <span class="unit-suffix">%</span>
                                                </div>
                                                <div class="field-unit flex-fill">
                                                    <input type="number" step="0.001" class="form-control" id="silverFine" value="0.000">
                                                        <span class="unit-suffix">gm</span>
                                                </div>
                                                <button type="button" class="btn-circle silver-add" id="addSilver" title="Add Silver">
                                                    <?= icon('plus') ?>
                                                </button>
                                            </div>
                                        </div>

                                        <div class="field-row silver-row">
                                            <div class="field-label">SILVER RATE / GIVEN / CHG. :</div>
                                            <div class="field-inputs silver-rate-inputs">
                                                <input type="number" class="form-control flex-fill" id="silverRate" placeholder="Rate" value="0">
                                                    <div class="field-unit flex-fill">
                                                        <input type="number" class="form-control" id="givenSilver" placeholder="GIVEN SILVER" value="0.000">
                                                            <span class="unit-suffix">gm</span>
                                                    </div>
                                                    <div class="field-unit flex-fill">
                                                        <input type="number" class="form-control" id="silverCharges" placeholder="Silver Charges" value="0">
                                                            <span class="unit-suffix">₹</span>
                                                    </div>
                                            </div>
                                        </div>

                                        <hr>

                                            <div class="field-row">
                                                <div class="field-label">SAMPLE :</div>
                                                <div class="field-inputs">
                                                    <select class="form-select flex-fill" id="sampleType">
                                                        <option>Rava sample received</option>
                                                        <option>Fine sample</option>
                                                        <option>Mixed sample</option>
                                                    </select>
                                                    <input type="text" class="form-control flex-fill" id="sampleSerial" placeholder="Serial No.">
                                                </div>
                                                <button type="button" class="btn-circle" id="addSample" title="Add Sample">
                                                    <?= icon('plus') ?>
                                                </button>
                                            </div>
                                        </div>

                                        <hr>

                                            <!-- GOLD CALCULATION - SAB ACTIVE -->
                                            <div class="field-row">
                                                <div class="field-label">FINE :</div>
                                                <div class="field-inputs">
                                                    <div class="field-unit flex-fill">
                                                        <input type="text" class="form-control" id="fineLeft" value="0.000">
                                                            <span class="unit-suffix">gm</span>
                                                    </div>
                                                    <div class="field-unit flex-fill">
                                                        <input type="text" class="form-control" id="fineRight" value="0.000">
                                                            <span class="unit-suffix">gm</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="field-row gold-mode-row">
                                                <div class="field-label">(दिया) GIVEN GOLD :</div>
                                                <div class="field-inputs">
                                                    <div class="field-unit flex-fill">
                                                        <input type="number" step="0.001" class="form-control" id="givenGold" value="0.000">
                                                            <span class="unit-suffix">gm</span>
                                                    </div>
                                                    <button type="button" class="btn-circle filled" id="applyGivenGold" title="Apply">
                                                        <?= icon('down') ?>
                                                    </button>
                                                    <div class="field-unit flex-fill">
                                                        <input type="number" step="0.01" class="form-control" id="goldPercent" placeholder="0.00" value="0.00">
                                                            <span class="unit-suffix">+(%)</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="field-row">
                                                <div class="field-label">(बाकि) DIFF GOLD :</div>
                                                <div class="field-inputs">
                                                    <div class="field-unit flex-fill">
                                                        <input type="text" class="form-control" id="diffGold" value="0.000">
                                                            <span class="unit-suffix">gm</span>
                                                    </div>
                                                    <button type="button" class="exchange-action-btn exchange-right-action" id="diffGoldBtn">(+)gm</button>
                                                </div>
                                            </div>

                                            <hr>

                                                <!-- CASH CALCULATION -->
                                                <div class="field-row">
                                                    <div class="field-label">TOLA RATE [P/S] :</div>
                                                    <div class="field-inputs">
                                                        <div class="field-unit flex-fill">
                                                            <input type="number" class="form-control" id="tolaRatePS" value="0">
                                                                <span class="unit-suffix">T/gm</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="field-row">
                                                    <div class="field-label">RATE [P/S] :</div>
                                                    <div class="field-inputs">
                                                        <div class="field-unit flex-fill">
                                                            <input type="number" class="form-control" id="ratePS" value="0">
                                                        </div>
                                                        <button type="button" class="btn-circle filled rate-transfer" id="applyRate" title="Apply Rate">
                                                            <?= icon('chevL') ?>
                                                        </button>
                                                        <div class="field-unit flex-fill">
                                                            <input type="number" class="form-control" id="rateCashAdjust" value="0">
                                                                <span class="unit-suffix">₹</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="field-row">
                                                    <div class="field-label">CASH [G/R] :</div>
                                                    <div class="field-inputs">
                                                        <div class="field-unit flex-fill">
                                                            <input type="number" class="form-control" id="cashGR" value="0">
                                                                <span class="unit-suffix">₹</span>
                                                        </div>
                                                        <button type="button" class="exchange-action-btn exchange-right-action" id="cashGRBtn">(-) %</button>
                                                    </div>
                                                </div>

                                                <div class="field-row">
                                                    <div class="field-label">CHARGES :</div>
                                                    <div class="field-inputs">
                                                        <div class="field-unit flex-fill">
                                                            <input type="number" class="form-control" id="charges" value="0">
                                                                <span class="unit-suffix">₹</span>
                                                        </div>
                                                        <button type="button" class="exchange-action-btn exchange-right-action" id="chargesBtn">(-)gm</button>
                                                    </div>
                                                </div>

                                                <hr>

                                                    <div class="field-row final-row">
                                                        <div class="field-label">FINAL CASH :</div>
                                                        <div class="field-inputs">
                                                            <div class="final-box flex-fill">
                                                                <input type="text" class="form-control" id="finalCash" value="0.00">
                                                                    <span>₹</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <!-- GIVEN/RECEIVED CASH ROWS -->
                                                    <div class="row g-1 mt-1">
                                                        <div class="col-6">
                                                            <div class="field-row">
                                                                <div class="field-label">GIVEN CASH :</div>
                                                                <div class="field-inputs">
                                                                    <div class="field-unit">
                                                                        <input type="number" class="form-control" id="givenCash" value="0">
                                                                            <span class="unit-suffix">₹</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="field-row">
                                                                <div class="field-label">ONLINE GIVEN RTGS :</div>
                                                                <div class="field-inputs">
                                                                    <div class="field-unit">
                                                                        <input type="number" class="form-control" id="rtgsGiven" value="0">
                                                                            <span class="unit-suffix">₹</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="field-row">
                                                                <div class="field-label">SELF BANK 2 GIVEN RTGS :</div>
                                                                <div class="field-inputs">
                                                                    <div class="field-unit">
                                                                        <input type="number" class="form-control" id="bank2Given" value="0">
                                                                            <span class="unit-suffix">₹</span>
